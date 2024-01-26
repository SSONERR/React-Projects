import { createContext, useContext, useState, useEffect, useRef } from 'react';

const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {

    // State ve değişkenlerin tanımlanması
    const [data, setData] = useState(null); // Hava durumu verilerini tutmak için state
    const [editing, setEditing] = useState(false); // Metin düzenleme durumunu tutmak için state
    const [text, setText] = useState('adana'); // Şehir metnini tutmak için state, varsayılan değer "Adana"
    const [alert, setAlert] = useState(false) // Hata uyarılarını kontrol etmek için state
    const [time, setTime] = useState(new Date()); // Zamanı tutmak için state, başlangıçta şu anki zaman
    const nameInput = useRef(null); // Şehir ismi girmek için 
    const utcHour = time.getUTCHours(); // Coordinated Universal Time'daki saat bilgisini tutar

    // Metin değiştiğinde veya bileşen yüklendiğinde hava durumu verilerini getir
    useEffect(() => {
        if (!text) return; // Eğer metin boşsa fetch işlemi yapma
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&lang=tr&units=metric&appid=59f0fc11d5776d15ab82c71ac12c2bb7`)
            .then((res) => {
                if (!res.ok) {
                    errorAlert(); // Hata varsa hata uyarısı göster
                    throw new Error('API request failed: Not Found');
                }
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error)); // Hata durumunda konsola yazdır
    }, [text]);

    // Her saniyede zamanı güncelle
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Component kaldırıldığında interval'i temizle
        return () => clearInterval(interval);
    }, []);

    // Düzenleme durumu değiştiğinde ve input alanı varsa odaklan
    useEffect(() => {
        if (editing && nameInput.current) {
            nameInput.current.focus();
        }
    }, [editing]);

    // Metin üzerine tıklandığında düzenleme moduna geç
    const handleTextClick = () => {
        setEditing(true);
        setText(data.name); // Metni al, input alanında göster
    };

    // Enter tuşuna basıldığında düzenleme modunu kapat ve metni güncelle
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            setEditing(false);
            setText(nameInput.current.value);
        }
    };

    // Input alanından çıkıldığında düzenleme modunu kapat
    const handleInputBlur = () => {
        setEditing(false);
    };

    // Hata durumunda hata uyarısı gösterme işlemi
    const errorAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }

    // Bağlam değerlerini oluştur
    const values = {
        data,
        text,
        setText,
        editing,
        setEditing,
        utcHour,
        time,
        handleInputBlur,
        handleInputKeyPress,
        handleTextClick,
        nameInput,
        alert
    };

    // WeatherContext.Provider bileşenini kullanarak bağlamı değerlerle sarmala
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
}

// useWeather adında bir özel kancayı oluştur
export const useWeather = () => {
    // useContext hook'u ile WeatherContext bağlamını al
    const context = useContext(WeatherContext);

    // Eğer bağlam tanımsızsa hata göster
    if (context === undefined) {
        throw new Error("useWeather hook must be called inside WeatherProvider component");
    }

    return context;
}
