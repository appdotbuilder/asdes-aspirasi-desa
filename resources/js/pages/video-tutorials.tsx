import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Clock, Users, Star, Search, BookOpen, BarChart3 } from 'lucide-react';

export default function VideoTutorials() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Semua', icon: '📚', count: 12 },
        { id: 'basic', name: 'Dasar', icon: '🎯', count: 4 },
        { id: 'reporting', name: 'Pelaporan', icon: '📝', count: 3 },
        { id: 'admin', name: 'Admin', icon: '👤', count: 3 },
        { id: 'advanced', name: 'Lanjutan', icon: '🚀', count: 2 }
    ];

    const tutorials = [
        {
            id: 1,
            title: "Pengenalan Platform Asdes",
            description: "Pelajari dasar-dasar penggunaan platform pelaporan infrastruktur desa",
            thumbnail: "🏘️",
            duration: "5:30",
            difficulty: "Pemula",
            category: "basic",
            views: 1234,
            rating: 4.8,
            topics: ["Pengenalan", "Interface", "Navigasi"]
        },
        {
            id: 2,
            title: "Cara Membuat Laporan Infrastruktur",
            description: "Panduan lengkap membuat laporan masalah infrastruktur step by step",
            thumbnail: "📋",
            duration: "8:45",
            difficulty: "Pemula",
            category: "reporting",
            views: 2156,
            rating: 4.9,
            topics: ["Formulir", "Upload Foto", "Lokasi"]
        },
        {
            id: 3,
            title: "Melacak Status Laporan Anda",
            description: "Cara memantau progress dan update status laporan yang telah dibuat",
            thumbnail: "👁️",
            duration: "4:20",
            difficulty: "Pemula",
            category: "reporting",
            views: 890,
            rating: 4.7,
            topics: ["Status", "Notifikasi", "Timeline"]
        },
        {
            id: 4,
            title: "Dashboard Admin - Overview",
            description: "Mengenal fitur-fitur utama dashboard untuk administrator desa",
            thumbnail: "📊",
            duration: "12:15",
            difficulty: "Menengah",
            category: "admin",
            views: 567,
            rating: 4.8,
            topics: ["Dashboard", "Statistik", "Manajemen"]
        },
        {
            id: 5,
            title: "Mengelola Laporan sebagai Admin",
            description: "Cara memproses, menanggapi, dan mengupdate status laporan warga",
            thumbnail: "⚙️",
            duration: "15:30",
            difficulty: "Menengah",
            category: "admin",
            views: 445,
            rating: 4.9,
            topics: ["Approval", "Status Update", "Response"]
        },
        {
            id: 6,
            title: "Menggunakan Fitur Analytics",
            description: "Memahami data dan statistik laporan untuk pengambilan keputusan",
            thumbnail: "📈",
            duration: "10:00",
            difficulty: "Lanjutan",
            category: "advanced",
            views: 321,
            rating: 4.6,
            topics: ["Charts", "Reports", "Insights"]
        },
        {
            id: 7,
            title: "Pengaturan Akun dan Profil",
            description: "Mengelola informasi akun, keamanan, dan preferensi pengguna",
            thumbnail: "👤",
            duration: "6:45",
            difficulty: "Pemula",
            category: "basic",
            views: 678,
            rating: 4.5,
            topics: ["Profile", "Password", "Settings"]
        },
        {
            id: 8,
            title: "Tips Menulis Laporan yang Efektif",
            description: "Panduan membuat laporan yang jelas dan mudah ditindaklanjuti",
            thumbnail: "✍️",
            duration: "7:20",
            difficulty: "Menengah",
            category: "reporting",
            views: 1089,
            rating: 4.8,
            topics: ["Writing", "Best Practice", "Examples"]
        },
        {
            id: 9,
            title: "Menggunakan Platform di Mobile",
            description: "Cara optimal menggunakan Asdes melalui perangkat smartphone",
            thumbnail: "📱",
            duration: "5:50",
            difficulty: "Pemula",
            category: "basic",
            views: 1456,
            rating: 4.7,
            topics: ["Mobile", "Responsive", "Touch"]
        },
        {
            id: 10,
            title: "Konfigurasi Notifikasi",
            description: "Mengatur preferensi notifikasi untuk update laporan dan sistem",
            thumbnail: "🔔",
            duration: "4:30",
            difficulty: "Pemula",
            category: "basic",
            views: 543,
            rating: 4.4,
            topics: ["Notifications", "Email", "Settings"]
        },
        {
            id: 11,
            title: "Backup dan Export Data",
            description: "Cara mengeksport data laporan untuk dokumentasi dan arsip",
            thumbnail: "💾",
            duration: "9:15",
            difficulty: "Lanjutan",
            category: "advanced",
            views: 234,
            rating: 4.7,
            topics: ["Export", "Backup", "Data"]
        },
        {
            id: 12,
            title: "Troubleshooting Masalah Umum",
            description: "Solusi untuk masalah teknis yang sering dihadapi pengguna",
            thumbnail: "🔧",
            duration: "11:40",
            difficulty: "Menengah",
            category: "admin",
            views: 678,
            rating: 4.6,
            topics: ["Problems", "Solutions", "Support"]
        }
    ];

    const filteredTutorials = tutorials.filter(tutorial => {
        const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tutorial.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Pemula': return 'bg-green-100 text-green-800';
            case 'Menengah': return 'bg-yellow-100 text-yellow-800';
            case 'Lanjutan': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case 'Pemula': return '🟢';
            case 'Menengah': return '🟡';
            case 'Lanjutan': return '🔴';
            default: return '⚪';
        }
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto p-6 space-y-8">
                    {/* Header */}
                    <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 animate-pulse">
                            <Play className="w-10 h-10 text-purple-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            🎥 Video Tutorials
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Pelajari cara menggunakan platform Asdes melalui video tutorial interaktif
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-2xl p-6 shadow-lg border-0">
                        <div className="flex-1 w-full lg:w-auto">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    placeholder="Cari tutorial, topik, atau kata kunci..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                                        selectedCategory === category.id 
                                            ? 'bg-purple-600 text-white shadow-lg scale-105' 
                                            : 'hover:bg-purple-50 hover:scale-105'
                                    }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                        {category.count}
                                    </Badge>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: BookOpen, label: "Total Tutorial", value: "12", color: "text-blue-600" },
                            { icon: Clock, label: "Total Durasi", value: "101 min", color: "text-green-600" },
                            { icon: Users, label: "Total Views", value: "10.8K", color: "text-purple-600" },
                            { icon: Star, label: "Rating Rata-rata", value: "4.7", color: "text-yellow-600" }
                        ].map((stat, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0">
                                <CardContent className="py-6">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3 ${stat.color}`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Tutorial Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                📚 Daftar Tutorial
                                {searchQuery && (
                                    <span className="text-lg font-normal text-gray-600 ml-2">
                                        - "{searchQuery}"
                                    </span>
                                )}
                            </h2>
                            <p className="text-gray-600">
                                Menampilkan {filteredTutorials.length} dari {tutorials.length} tutorial
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTutorials.map((tutorial) => (
                                <Card key={tutorial.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-102 border-0 overflow-hidden">
                                    {/* Thumbnail */}
                                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-500">
                                        <div className="text-6xl animate-bounce">{tutorial.thumbnail}</div>
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-purple-600" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-black/50 text-white border-0">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {tutorial.duration}
                                            </Badge>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <Badge className={getDifficultyColor(tutorial.difficulty)}>
                                                <span className="mr-1">{getDifficultyIcon(tutorial.difficulty)}</span>
                                                {tutorial.difficulty}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg font-semibold group-hover:text-purple-600 transition-colors line-clamp-2">
                                            {tutorial.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm leading-relaxed line-clamp-2">
                                            {tutorial.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        {/* Topics */}
                                        <div className="flex flex-wrap gap-1">
                                            {tutorial.topics.slice(0, 3).map((topic, index) => (
                                                <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>{tutorial.views.toLocaleString()}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500" />
                                                    <span>{tutorial.rating}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <Button className="w-full group-hover:bg-purple-600 transition-colors duration-300 font-semibold">
                                            <Play className="w-4 h-4 mr-2" />
                                            Tonton Sekarang
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Learning Path Section */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                            <BarChart3 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                            Ikuti Learning Path Terpandu! 🎯
                        </h3>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            Kami merekomendasikan urutan belajar yang optimal untuk menguasai platform Asdes
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8">
                                🚀 Mulai Learning Path
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8">
                                📋 Lihat Roadmap
                            </Button>
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "📖",
                                title: "Dokumentasi Lengkap",
                                description: "Panduan tertulis komprehensif",
                                color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
                            },
                            {
                                icon: "💬",
                                title: "Forum Komunitas",
                                description: "Diskusi dengan pengguna lain",
                                color: "bg-green-50 hover:bg-green-100 border-green-200"
                            },
                            {
                                icon: "📞",
                                title: "Support Langsung",
                                description: "Bantuan personal dari tim ahli",
                                color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
                            }
                        ].map((resource, index) => (
                            <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${resource.color}`}>
                                <CardContent className="p-6 text-center">
                                    <div className="text-4xl mb-4">{resource.icon}</div>
                                    <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {resource.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}