import React, { useState } from 'react';
import Header from './components/Header';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-neutral-900 text-white antialiased">
      {/* Acoplagem limpa do Header passando os estados por props */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl text-neutral-500 font-medium">
          Header renderizado com sucesso. Pronto para os próximos blocos!
        </h2>
      </main>
    </div>
  );
}
