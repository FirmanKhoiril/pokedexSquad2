import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About</h1>
                
                <div className="space-y-6 text-gray-700">
                    <div className="prose max-w-none">
                        <p className="text-lg leading-relaxed">
                            Aplikasi Pokédex Pokémon berfungsi sebagai ensiklopedia digital untuk informasi tentang berbagai Pokémon. Fungsinya meliputi:
                        </p>
                        
                        <ul className="list-disc pl-6 space-y-2 my-4">
                            <li className="text-lg">Data Pokémon: Menyediakan informasi detail seperti jenis, kemampuan, statistik, evolusi, dan habitat Pokémon.</li>
                            <li className="text-lg">Panduan Koleksi: Membantu pemain melacak Pokémon yang sudah ditangkap atau dilihat.</li>
                            <li className="text-lg">Tips Gameplay: Memberikan panduan tentang kekuatan dan kelemahan berdasarkan tipe Pokémon untuk strategi pertempuran.</li>
                            <li className="text-lg">Interaktif: Beberapa versi modern memungkinkan pencarian berbasis lokasi, mini-games, atau augmented reality.</li>
                        </ul>

                        <p className="text-lg leading-relaxed mb-8">
                            Pokédex berguna untuk pemain yang ingin mendalami dunia Pokémon, baik untuk koleksi maupun kompetisi.
                        </p>
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="text-2xl font-semibold mb-4">Created By:</h2>
                        <ul className="list-none space-y-2">
                            <li className="text-lg">• Firman Khoiril R.</li>
                            <li className="text-lg">• Adnan Ardiansyah</li>
                            <li className="text-lg">• Oscar Theodorus Elius Oraplean</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;