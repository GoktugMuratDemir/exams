import Card from "./exams/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
          Sınav Yönetim Sistemi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Sınav Oluştur"
            subtitle="Yeni bir sınav oluşturun"
            onClick={() => console.log("Sınav oluştur tıklandı")}
          >
            <p>Kolayca yeni sınavlar oluşturun ve soruları ekleyin.</p>
          </Card>

          <Card
            title="Sınavları Görüntüle"
            subtitle="Mevcut sınavları inceleyin"
            onClick={() => console.log("Sınavları görüntüle tıklandı")}
          >
            <p>Oluşturduğunuz tüm sınavları listeleyin ve yönetin.</p>
          </Card>

          <Card
            title="Sonuçları Analiz Et"
            subtitle="Sınav sonuçlarını değerlendirin"
            onClick={() => console.log("Sonuçları analiz et tıklandı")}
          >
            <p>Öğrenci performansını analiz edin ve raporlar oluşturun.</p>
          </Card>

          <Card
            title="Sınav Simülasyonu"
            subtitle="Gerçek zamanlı sınav deneyimi"
          >
            <p>Öğrenciler için gerçekçi sınav ortamı sağlayın.</p>
            <div className="mt-4">
              <a
                href="/exams/simulation"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Simülasyona Git →
              </a>
            </div>
          </Card>

          <Card title="İstatistikler" subtitle="Genel performans verileri">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Toplam Sınav:</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span>Aktif Öğrenci:</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between">
                <span>Ortalama Başarı:</span>
                <span className="font-semibold text-green-600">%82</span>
              </div>
            </div>
          </Card>

          <Card title="Ayarlar" subtitle="Sistem konfigürasyonu">
            <p>
              Sınav süreleri, puanlama sistemi ve diğer ayarları yapılandırın.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
