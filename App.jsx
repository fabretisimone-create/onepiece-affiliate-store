import React, { useState } from 'react';

// Mock de dados dos produtos afiliados da Amazon (Padrão Sênior: Dados separados da UI)
const PRODUCTS_MOCK = [
  {
    id: 1,
    title: "Action Figure Luffy Gear 5 - Edição Colecionador",
    price: "R\$ 189,90",
    image: "https://unsplash.com", // Placeholder (substitua pelas imagens reais da Amazon)
    amazonLink: "https://amazon.com.br",
    category: "Action Figures"
  },
  {
    id: 2,
    title: "Moletom Streetwear Trafalgar Law - Preto/Amarelo",
    price: "R\$ 149,90",
    image: "https://unsplash.com",
    amazonLink: "https://amazon.com.br",
    category: "Vestuário"
  },
  {
    id: 3,
    title: "Luminária LED Navio Thousand Sunny 3D",
    price: "R\$ 89,90",
    image: "https://unsplash.com",
    amazonLink: "https://amazon.com.br",
    category: "Decoração"
  },
  {
    id: 4,
    title: "Réplica Katana Roronoa Zoro - Enma",
    price: "R\$ 299,90",
    image: "https://unsplash.com",
    amazonLink: "https://amazon.com.br",
    category: "Colecionáveis"
  }
];

export default function OnePieceAffiliateStore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Action Figures', 'Vestuário', 'Decoração', 'Colecionáveis'];

  // Filtro de produtos performático
  const filteredProducts = PRODUCTS_MOCK.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans antialiased">
      {/* 1. NAV BAR: Altamente responsiva */}
      <nav className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 px-4 py-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-amber-500 font-mono">OP•GEAR</span>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold uppercase">Afiliado Amazon</span>
          </div>
          
          {/* Barra de Pesquisa */}
          <div className="w-full sm:w-72 relative">
            <input 
              type="text" 
              placeholder="Buscar tesouros..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-800 text-sm text-neutral-200 pl-4 pr-10 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION: Layout adaptável para Mobile, Tablet e Desktop */}
      <header className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 mb-4 animate-fade-in">
            O Universo One Piece no Seu Setup
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-8">
            Encontre os melhores produtos, action figures e vestuários originais selecionados diretamente da Amazon.
          </p>
          
          {/* Filtros por Categoria (Scroll horizontal no mobile) */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 mask-scrollbar no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === category 
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 3. PRODUCT GRID: Responsivo (1 coluna mobile, 2 colunas tablet, 3-4 colunas desktop) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article 
                key={product.id} 
                className="group flex flex-col bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800/60 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Imagem do Produto */}
                <div className="aspect-square w-full bg-neutral-900 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-[10px] text-amber-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-800">
                    {product.category}
                  </span>
                </div>

                {/* Info do Produto */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-100 line-clamp-2 group-hover:text-amber-400 transition-colors mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xl font-black text-amber-500 mb-5">{product.price}</p>
                  </div>
                  
                  {/* Botão de Afiliado CTA */}
                  <a 
                    href={product.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-center text-sm font-black py-2.5 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-orange-950/20"
                  >
                    Ver na Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">Nenhum tesouro encontrado por aqui...</p>
          </div>
        )}
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-4 text-center text-xs text-neutral-500">
        <p>© 2026 OP•GEAR. Desenvolvido como portfólio profissional. Todos os direitos reservados à Toei Animation & Eiichiro Oda.</p>
        <p className="mt-2 text-neutral-600">Como participante do Programa de Associados da Amazon, somos remunerados por compras qualificadas.</p>
      </footer>
    </div>
  );
}
