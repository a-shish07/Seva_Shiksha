import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, ExternalLink, TrendingUp, Bell, Globe, BookOpen, Users, Award, Newspaper, Zap, Filter } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  const categories = [
    { id: 'all', name: 'All News', count: 18, icon: Globe },
    { id: 'admissions', name: 'Admissions', count: 7, icon: BookOpen },
    { id: 'scholarships', name: 'Scholarships', count: 5, icon: Award },
    { id: 'events', name: 'Events', count: 4, icon: Users },
    { id: 'announcements', name: 'Breaking', count: 2, icon: Zap },
  ];

  // Enhanced news data with external links and recent content
  const newsData = [
    {
      id: 1,
      title: "CUET UG 2025 Registration Begins - Apply Now for Central Universities",
      excerpt: "Common University Entrance Test (CUET) UG 2025 registration has begun. Over 200 central and state universities will accept CUET UG scores for admissions.",
      category: 'admissions',
      date: '2025-01-14',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop',
      tags: ['CUET', 'Central Universities', 'Admission', 'UG'],
      featured: true,
      trending: true,
      isExternal: true,
      externalLink: 'https://cuet.samarth.ac.in/',
      priority: 'high'
    },
    {
      id: 2,
      title: "JEE Main 2025 Session 1 Results Declared - Check Your Score",
      excerpt: "National Testing Agency (NTA) has declared JEE Main 2025 January session results. Students can check their scores and percentile on the official website.",
      category: 'announcements',
      date: '2025-01-13',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop',
      tags: ['JEE Main', 'Results', 'NTA', 'Engineering'],
      featured: true,
      breaking: true,
      isExternal: true,
      externalLink: 'https://jeemain.nta.nic.in/',
      priority: 'high'
    },
    {
      id: 3,
      title: "PM Scholarship Scheme 2025: ₹30,000 Annual Support for Students",
      excerpt: "Prime Minister's Scholarship Scheme for 2025 announced with increased financial support. Children of armed forces personnel and paramilitary forces can apply.",
      category: 'scholarships',
      date: '2025-01-12',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop',
      tags: ['PM Scholarship', 'Government', 'Armed Forces', 'Financial Aid'],
      featured: true,
      isExternal: true,
      externalLink: 'https://scholarships.gov.in/',
      priority: 'medium'
    },
    {
      id: 4,
      title: "NEET UG 2025 Application Process Begins February 1st",
      excerpt: "National Eligibility cum Entrance Test (NEET) UG 2025 application process will begin from February 1st. Medical aspirants must note the new exam pattern changes.",
      category: 'admissions',
      date: '2025-01-11',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      tags: ['NEET', 'Medical', 'UG Admission', 'NTA'],
      featured: false,
      isExternal: true,
      externalLink: 'https://neet.nta.nic.in/',
      priority: 'high'
    },
    {
      id: 5,
      title: "Digital India Scholarship 2025: Tech Skills for Rural Students",
      excerpt: "Government launches comprehensive digital literacy program with scholarships for rural students. Focus on AI, Data Science, and Digital Marketing skills.",
      category: 'scholarships',
      date: '2025-01-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Digital India', 'Rural Education', 'Tech Skills', 'AI'],
      featured: false,
      trending: true,
      priority: 'medium'
    },
    {
      id: 6,
      title: "IIT Placement Season 2025: Record-Breaking Packages Offered",
      excerpt: "IIT campuses witness unprecedented placement offers with highest package reaching ₹2.5 crore. Tech giants lead the recruitment drive with innovative roles.",
      category: 'announcements',
      date: '2025-01-09',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop',
      tags: ['IIT', 'Placements', 'Tech Jobs', 'Salary'],
      featured: false,
      priority: 'medium'
    },
    {
      id: 7,
      title: "National Career Expo 2025: Explore 500+ Career Opportunities",
      excerpt: "India's largest career exhibition featuring opportunities across 25 sectors. Free registration open for students and professionals from January 20th.",
      category: 'events',
      date: '2025-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop',
      tags: ['Career Expo', 'Job Fair', 'Professional Development', 'Networking'],
      featured: false,
      isExternal: true,
      externalLink: 'https://nationalcareerexpo.in/',
      priority: 'low'
    },
    {
      id: 8,
      title: "Skill India Mission: 1 Crore Youth to be Trained by 2025",
      excerpt: "Government's ambitious Skill India mission targets training 1 crore youth in emerging technologies. Focus on green jobs and sustainable development.",
      category: 'events',
      date: '2025-01-07',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Skill India', 'Training', 'Green Jobs', 'Government Initiative'],
      featured: false,
      priority: 'medium'
    }
  ];

  useEffect(() => {
    let filtered = newsData;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Sort by priority and date
    filtered = filtered.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return new Date(b.date) - new Date(a.date);
    });
    
    setFilteredNews(filtered);
  }, [selectedCategory, searchQuery]);

  const featuredNews = newsData.filter(news => news.featured);
  const breakingNews = newsData.filter(news => news.breaking);
  const trendingNews = newsData.filter(news => news.trending);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const newsDate = new Date(dateString);
    const diffTime = Math.abs(now - newsDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return formatDate(dateString);
  };

  const handleNewsClick = (news) => {
    if (news.isExternal && news.externalLink) {
      window.open(news.externalLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-300/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 mt-16">
        {/* Hero Header */}
        <div className="text-center mb-16 relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-amber-400/20"></div>
          <div className="relative px-6 py-12 sm:px-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Bell className="w-4 h-4" />
              Live Updates • Breaking News
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 bg-clip-text text-transparent">
                Education
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
                News Hub
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Your ultimate destination for the latest updates, breaking news, and opportunities 
              in India's education landscape. Stay ahead with real-time information.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">18 Active Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Zap className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">5 Breaking Stories</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <ExternalLink className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Official Links Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breaking News Ticker */}
        {breakingNews.length > 0 && (
          <div className="mb-12 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-4 overflow-hidden relative">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full shrink-0">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">BREAKING</span>
              </div>
              <div className="overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  {breakingNews.map((news, index) => (
                    <span key={news.id} className="inline-block mr-16">
                      <button 
                        onClick={() => handleNewsClick(news)}
                        className="hover:underline font-medium"
                      >
                        {news.title}
                      </button>
                      {index < breakingNews.length - 1 && <span className="mx-4">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured News - Hero Section */}
        {featuredNews.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                Featured Stories
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Article */}
              {featuredNews[0] && (
                <div className="lg:col-span-2">
                  <article className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
                    <div className="relative h-80">
                      <img 
                        src={featuredNews[0].image} 
                        alt={featuredNews[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Priority Badge */}
                      {featuredNews[0].priority === 'high' && (
                        <div className="absolute top-4 left-4 bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                          HIGH PRIORITY
                        </div>
                      )}
                      
                      {/* External Link Badge */}
                      {featuredNews[0].isExternal && (
                        <div className="absolute top-4 right-4 bg-primary-600 text-white p-2 rounded-full">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                      
                      {/* Trending Badge */}
                      {featuredNews[0].trending && (
                        <div className="absolute top-16 left-4 flex items-center gap-1 bg-accent-600 text-white px-2 py-1 rounded-full text-xs">
                          <TrendingUp className="w-3 h-3" />
                          TRENDING
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                          <Calendar size={14} />
                          {getTimeAgo(featuredNews[0].date)}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                          <Clock size={14} />
                          {featuredNews[0].readTime}
                        </span>
                        <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {categories.find(cat => cat.id === featuredNews[0].category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {featuredNews[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews[0].excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredNews[0].tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="flex items-center gap-1 text-xs text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handleNewsClick(featuredNews[0])}
                        className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all"
                      >
                        {featuredNews[0].isExternal ? 'Visit Official Site' : 'Read Full Story'}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </article>
                </div>
              )}
              
              {/* Secondary Featured Articles */}
              <div className="space-y-6">
                {featuredNews.slice(1, 3).map((news) => (
                  <article key={news.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-40">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {news.isExternal && (
                        <div className="absolute top-2 right-2 bg-primary-600 text-white p-1 rounded-full">
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{getTimeAgo(news.date)}</span>
                        <span>•</span>
                        <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full border border-primary-200">
                          {categories.find(cat => cat.id === news.category)?.name}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {news.title}
                      </h4>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {news.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handleNewsClick(news)}
                        className="text-primary-600 hover:text-primary-500 font-medium text-xs flex items-center gap-1"
                      >
                        {news.isExternal ? 'Visit Site' : 'Read More'}
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Advanced Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary-700">Find Your News</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-300" size={20} />
              <input
                type="text"
                placeholder="Search by keywords, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-jasmine-300 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all bg-white/80 backdrop-blur-sm text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-500"
                >
                  ×
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-medium transition-all transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white shadow-lg'
                        : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-jasmine-100/80 border border-jasmine-200'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-jasmine-100 text-primary-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {searchQuery && (
            <div className="mt-4 text-sm text-primary-700">
              Showing results for "<span className="font-semibold text-accent-600">{searchQuery}</span>"
            </div>
          )}
        </div>

        {/* Latest News Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                Latest Updates
              </h2>
            </div>
            <div className="text-sm text-secondary-700">
              {filteredNews.length} articles found
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <article 
                key={news.id} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1504383484689-0a8b1e9e0226?w=500&h=300&fit=crop&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Priority & Status Badges */}
                  <div className="absolute top-3 left-3 space-y-2">
                    {news.priority === 'high' && (
                      <div className="bg-saffron-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        HIGH PRIORITY
                      </div>
                    )}
                    {news.trending && (
                      <div className="flex items-center gap-1 bg-accent-600 text-white px-2 py-1 rounded-full text-xs">
                        <TrendingUp className="w-3 h-3" />
                        TRENDING
                      </div>
                    )}
                    {news.breaking && (
                      <div className="flex items-center gap-1 bg-primary-700 text-white px-2 py-1 rounded-full text-xs animate-pulse">
                        <Zap className="w-3 h-3" />
                        BREAKING
                      </div>
                    )}
                  </div>
                  
                  {news.isExternal && (
                    <div className="absolute top-3 right-3 bg-primary-600 text-white p-2 rounded-full shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                  
                  {/* Time Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                    {getTimeAgo(news.date)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      news.category === 'scholarships' ? 'bg-accent-100 text-accent-700 border border-accent-200' :
                      news.category === 'admissions' ? 'bg-primary-100 text-primary-700 border border-primary-200' :
                      news.category === 'events' ? 'bg-jasmine-100 text-primary-700 border border-jasmine-200' :
                      news.category === 'announcements' ? 'bg-saffron-100 text-saffron-700 border border-saffron-200' :
                      'bg-secondary-100 text-secondary-700 border border-secondary-200'
                    }`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {news.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">{news.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 text-xs text-primary-700 bg-primary-50 px-2 py-1 rounded-full border border-primary-200">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleNewsClick(news)}
                      className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      {news.isExternal ? 'Visit Official Site' : 'Read Article'}
                      <ArrowRight size={14} />
                    </button>
                    
                    {news.priority === 'high' && (
                      <div className="text-saffron-700 text-xs font-medium bg-saffron-50 px-2 py-1 rounded-full">
                        URGENT
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-3xl border border-jasmine-200">
            <div className="text-primary-200 mb-6">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-primary-700 mb-4">No News Found</h3>
            <p className="text-secondary-700 mb-6 max-w-md mx-auto">
              We couldn't find any articles matching your criteria. Try adjusting your search terms or exploring different categories.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter & Quick Links */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Subscription */}
          <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 to-accent-600/90 backdrop-blur-sm"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Never Miss an Update</h3>
              </div>
              <p className="text-jasmine-200 mb-6 leading-relaxed">
                Get instant notifications about important education news, exam updates, scholarship announcements, and admission deadlines directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20 bg-white/90 backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-white text-primary-700 rounded-2xl font-semibold hover:bg-secondary-100 transition-colors transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
              <div className="mt-4 text-xs text-jasmine-200">
                ✓ No spam • ✓ Unsubscribe anytime • ✓ Free forever
              </div>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 p-2 rounded-lg">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-700">Quick Access</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'CUET Official Portal', url: 'https://cuet.samarth.ac.in/', desc: 'Apply for central university admissions' },
                { title: 'JEE Main Results', url: 'https://jeemain.nta.nic.in/', desc: 'Check your engineering entrance results' },
                { title: 'NEET Applications', url: 'https://neet.nta.nic.in/', desc: 'Medical entrance exam registration' },
                // { title: 'Scholarships Portal', url: 'https://scholarships.gov.in/', desc: 'Apply for government scholarships' },
                { title: 'Digital India Initiative', url: 'https://digitalindia.gov.in/', desc: 'Learn about digital skill programs' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-gradient-to-r from-white to-jasmine-50 rounded-2xl border border-jasmine-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary-700 group-hover:text-accent-600 transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-secondary-700 mt-1">{link.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default News;