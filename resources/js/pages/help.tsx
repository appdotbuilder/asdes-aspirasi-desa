import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';
import { HelpCircle, MessageSquare, Phone, Mail, Video, FileText, Users } from 'lucide-react';

export default function Help() {
    const quickActions = [
        {
            icon: <Video className="w-8 h-8" />,
            title: 'Video Tutorials',
            description: 'Pelajari cara menggunakan platform dengan video panduan',
            href: '/video-tutorials',
            color: 'bg-red-50 text-red-600 hover:bg-red-100'
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: 'Panduan Lengkap',
            description: 'Dokumentasi lengkap penggunaan platform',
            href: '#documentation',
            color: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: 'FAQ',
            description: 'Pertanyaan yang sering diajukan',
            href: '#faq',
            color: 'bg-green-50 text-green-600 hover:bg-green-100'
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: 'Kontak Support',
            description: 'Hubungi tim dukungan teknis',
            href: '#contact',
            color: 'bg-purple-50 text-purple-600 hover:bg-purple-100'
        }
    ];

    const faqItems = [
        {
            question: "Bagaimana cara membuat laporan infrastruktur?",
            answer: "Untuk membuat laporan, klik tombol 'Buat Laporan' di halaman utama. Isi formulir dengan detail masalah infrastruktur yang ingin dilaporkan, pilih kategori yang sesuai, dan lampirkan foto jika ada. Pastikan lokasi yang dimasukkan akurat agar tim dapat menindaklanjuti dengan tepat."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk menindaklanjuti laporan?",
            answer: "Waktu penindaklanjutan bervariasi tergantung jenis dan tingkat urgensi masalah. Laporan darurat biasanya ditanggapi dalam 24 jam, sedangkan laporan umum dalam 3-7 hari kerja. Anda dapat memantau status laporan melalui dashboard."
        },
        {
            question: "Apakah saya perlu mendaftar untuk membuat laporan?",
            answer: "Tidak, Anda dapat membuat laporan tanpa mendaftar. Namun, dengan mendaftar Anda dapat melacak status laporan, menerima notifikasi update, dan mengakses riwayat laporan sebelumnya."
        },
        {
            question: "Bagaimana cara melacak status laporan saya?",
            answer: "Setelah membuat laporan, Anda akan mendapat nomor referensi. Gunakan nomor ini untuk melacak status di halaman 'Lihat Laporan' atau masuk ke akun Anda jika sudah terdaftar untuk melihat semua laporan dalam dashboard."
        },
        {
            question: "Kategori infrastruktur apa saja yang dapat dilaporkan?",
            answer: "Anda dapat melaporkan masalah pada jalan, jembatan, drainase, fasilitas air bersih, listrik, dan fasilitas umum lainnya. Pilih kategori yang paling sesuai dengan masalah yang ingin dilaporkan."
        },
        {
            question: "Apakah data dan laporan saya aman?",
            answer: "Ya, kami menerapkan standar keamanan tinggi untuk melindungi data pribadi dan laporan Anda. Data hanya digunakan untuk keperluan penindaklanjutan laporan dan perbaikan layanan."
        }
    ];

    const supportChannels = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            description: "Senin - Jumat, 08:00 - 17:00",
            contact: "(021) 123-4567",
            color: "text-green-600"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            description: "Respon dalam 24 jam",
            contact: "support@asdes.desa.id",
            color: "text-blue-600"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "WhatsApp",
            description: "Chat langsung dengan admin",
            contact: "+62 812-3456-7890",
            color: "text-green-500"
        }
    ];

    const guides = [
        {
            icon: "📱",
            title: "Panduan Mobile",
            description: "Cara menggunakan platform di perangkat mobile",
            tags: ["Mobile", "Responsive"]
        },
        {
            icon: "👤",
            title: "Panduan Admin",
            description: "Mengelola laporan dan dashboard admin",
            tags: ["Admin", "Dashboard"]
        },
        {
            icon: "📊",
            title: "Panduan Analytics",
            description: "Memahami statistik dan laporan data",
            tags: ["Analytics", "Reports"]
        },
        {
            icon: "🔧",
            title: "Troubleshooting",
            description: "Mengatasi masalah umum yang mungkin terjadi",
            tags: ["Problem", "Solution"]
        }
    ];

    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="max-w-6xl mx-auto p-6 space-y-8">
                    {/* Header */}
                    <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 animate-bounce">
                            <HelpCircle className="w-10 h-10 text-blue-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            🆘 Pusat Bantuan
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Temukan jawaban atas pertanyaan Anda dan pelajari cara menggunakan platform Asdes dengan mudah
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickActions.map((action, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-md">
                                <CardHeader className="text-center pb-2">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${action.color} transition-colors duration-300`}>
                                        {action.icon}
                                    </div>
                                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                                        {action.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pt-0">
                                    <CardDescription className="text-sm leading-relaxed">
                                        {action.description}
                                    </CardDescription>
                                    <div className="mt-4">
                                        {action.href.startsWith('/') ? (
                                            <Link href={action.href}>
                                                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
                                                    Akses Sekarang
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
                                                Lihat Detail
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Documentation Section */}
                    <div id="documentation" className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                📚 Panduan Penggunaan
                            </h2>
                            <p className="text-lg text-gray-600">
                                Pelajari fitur-fitur platform secara detail
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {guides.map((guide, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-102">
                                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                                        <div className="text-3xl mr-4">{guide.icon}</div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                                                {guide.title}
                                            </CardTitle>
                                            <CardDescription className="mt-1">
                                                {guide.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {guide.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
                                            Baca Panduan
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div id="faq" className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                ❓ Pertanyaan yang Sering Diajukan
                            </h2>
                            <p className="text-lg text-gray-600">
                                Temukan jawaban cepat untuk pertanyaan umum
                            </p>
                        </div>

                        <Card className="shadow-lg border-0">
                            <CardContent className="p-6">
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                    {faqItems.map((item, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-blue-50/50 transition-colors">
                                            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-4">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Support */}
                    <div id="contact" className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                📞 Hubungi Kami
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tim support siap membantu Anda 24/7
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {supportChannels.map((channel, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                                    <CardHeader className="pb-4">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4 ${channel.color} group-hover:scale-110 transition-transform mx-auto`}>
                                            {channel.icon}
                                        </div>
                                        <CardTitle className="text-lg font-semibold">
                                            {channel.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {channel.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="font-semibold text-gray-900 mb-4">
                                            {channel.contact}
                                        </p>
                                        <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
                                            Hubungi Sekarang
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Additional Help */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                            Masih Butuh Bantuan? 🤝
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Tim ahli kami siap membantu Anda mengatasi segala permasalahan teknis
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                                📧 Kirim Pesan
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                                💬 Live Chat
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}