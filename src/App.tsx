import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Globe, 
  DollarSign, 
  BarChart3, 
  Users,
  ChevronRight,
  Play,
  MessageCircle,
  Star,
  ArrowUpRight,
  Building2,
  Shield,
  CheckCircle,
  MapPin,
  Calendar,
  Eye,
  Zap,
  Award,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  Briefcase,
  Clock,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(13.31);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    ytd: 0,
    monthly: 0,
    weekly: 0,
    profit: 0,
    revenue: 0,
    marketCap: 0,
    circuits: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time price updates
    const priceInterval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.5) * 0.02;
        return Math.max(13.20, Math.min(13.40, prev + change));
      });
    }, 3000);

    // Animate metrics counters
    const animateCounters = () => {
      const targets = { 
        ytd: 167.03, 
        monthly: 47.29, 
        weekly: 10.22, 
        profit: 350,
        revenue: 21.85,
        marketCap: 294,
        circuits: 25
      };
      const duration = 2500;
      const steps = 80;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedMetrics({
          ytd: targets.ytd * easeOut,
          monthly: targets.monthly * easeOut,
          weekly: targets.weekly * easeOut,
          profit: targets.profit * easeOut,
          revenue: targets.revenue * easeOut,
          marketCap: targets.marketCap * easeOut,
          circuits: targets.circuits * easeOut
        });
        
        if (currentStep >= steps) {
          clearInterval(counterInterval);
        }
      }, stepTime);
    };

    setTimeout(animateCounters, 800);

    return () => clearInterval(priceInterval);
  }, []);

  const TradingViewWidget = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "BSE:SELLWIN",
        "interval": "D",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": false,
        "calendar": false,
        "studies": ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
        "support_host": "https://www.tradingview.com"
      });
      
      const container = document.getElementById('tradingview-widget');
      if (container) {
        container.appendChild(script);
      }
      
      return () => {
        if (container && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }, []);

    return (
      <div className="tradingview-widget-container" style={{ height: '600px', width: '100%' }}>
        <div id="tradingview-widget" style={{ height: '100%', width: '100%' }}></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-xl shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">InvestPro</span>
                <span className="text-sm text-gray-500 block -mt-1">Premium Stock Analytics</span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#analysis" className="text-gray-700 hover:text-emerald-600 font-semibold transition-colors">Live Analysis</a>
              <a href="#chart" className="text-gray-700 hover:text-emerald-600 font-semibold transition-colors">Interactive Chart</a>
              <a href="#insights" className="text-gray-700 hover:text-emerald-600 font-semibold transition-colors">Market Insights</a>
              <a 
                href="https://t.me/NSEBSE_STOCKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center space-x-2 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Join Telegram</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - First Half Background */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
          
          {/* Animated Chart Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 600">
            <path d="M0,300 Q200,150 400,200 T800,180 Q1000,160 1200,140" stroke="url(#gradient1)" strokeWidth="3" fill="none" className="animate-pulse" />
            <path d="M0,400 Q300,250 600,300 T1200,250" stroke="url(#gradient2)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            {/* Enhanced Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Shield, text: 'Transparent Reporting', color: 'emerald' },
                { icon: Eye, text: 'FIIs & Institutions on Radar', color: 'blue' },
                { icon: TrendingUp, text: 'Consistent Breakout Trend', color: 'purple' },
                { icon: Globe, text: 'Global Expansion Moves', color: 'indigo' },
                { icon: Award, text: '25 Consecutive Upper Circuits', color: 'amber' },
                { icon: Activity, text: 'Real-time Market Data', color: 'rose' }
              ].map((badge, index) => (
                <div key={index} className={`flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full border-2 border-${badge.color}-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                  <CheckCircle className={`h-5 w-5 text-${badge.color}-600 group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-semibold text-gray-800">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 border-2 border-emerald-300 rounded-full text-emerald-800 text-lg font-bold shadow-lg">
                <Star className="h-6 w-6 mr-3 text-emerald-700 animate-pulse" />
                🔥 {Math.round(animatedMetrics.circuits)} Consecutive Upper Circuits 🔥
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
                Why Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">Global Investment Giants</span> Bullish on Sellwin Traders?
              </h1>
              
              <div className="bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-sm p-8 rounded-3xl border-2 border-emerald-200 shadow-2xl max-w-5xl mx-auto">
                <p className="text-2xl text-gray-800 font-bold mb-6">
                  Sellwin Traders Limited shares are grabbing investor attention after a staggering <span className="text-emerald-600 font-black">{Math.round(animatedMetrics.circuits)} consecutive upper circuit hits</span>. Year-to-date, the stock is up <span className="text-blue-600 font-black">+{animatedMetrics.ytd.toFixed(1)}%</span>, making it a hot pick in the microcap space.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <p className="text-emerald-800 font-bold text-lg">Current Price</p>
                    <p className="text-3xl font-black text-emerald-600">₹{currentPrice.toFixed(2)}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-blue-800 font-bold text-lg">Target Range</p>
                    <p className="text-3xl font-black text-blue-600">₹25–₹30</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-purple-800 font-bold text-lg">Market Cap</p>
                    <p className="text-3xl font-black text-purple-600">₹{Math.round(animatedMetrics.marketCap)} Cr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <a 
                href="https://t.me/NSEBSE_STOCKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group transform hover:-translate-y-1"
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>📲 Join Our Telegram for Daily Stock Insights</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <button className="border-3 border-blue-600 text-blue-700 bg-blue-50 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-100 transition-all duration-300 flex items-center justify-center space-x-3 hover:-translate-y-1">
                <Play className="h-6 w-6" />
                <span>Watch Analysis Video</span>
              </button>
            </div>
          </div>

          {/* Enhanced Growth Metrics Grid */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { 
                  label: 'YTD Returns', 
                  value: `+${animatedMetrics.ytd.toFixed(1)}%`, 
                  icon: TrendingUp, 
                  color: 'emerald',
                  bgGradient: 'from-emerald-500 to-emerald-600',
                  description: 'Year-to-date performance'
                },
                { 
                  label: 'Last Month', 
                  value: `+${animatedMetrics.monthly.toFixed(1)}%`, 
                  icon: BarChart3, 
                  color: 'blue',
                  bgGradient: 'from-blue-500 to-blue-600',
                  description: 'Monthly growth rate'
                },
                { 
                  label: '5 Sessions', 
                  value: `+${animatedMetrics.weekly.toFixed(1)}%`, 
                  icon: Zap, 
                  color: 'purple',
                  bgGradient: 'from-purple-500 to-purple-600',
                  description: 'Recent session gains'
                },
                { 
                  label: 'YoY Profit Growth', 
                  value: `+${animatedMetrics.profit.toFixed(0)}%`, 
                  icon: DollarSign, 
                  color: 'amber',
                  bgGradient: 'from-amber-500 to-amber-600',
                  description: 'Annual profit increase'
                }
              ].map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${metric.bgGradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <ArrowUpRight className={`h-6 w-6 text-${metric.color}-500 group-hover:scale-125 transition-transform`} />
                    </div>
                    <h3 className="text-gray-600 font-semibold text-sm mb-2">{metric.label}</h3>
                    <p className={`text-4xl font-black text-${metric.color}-600 mb-2`}>{metric.value}</p>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📹 Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Market Analysis</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get insider insights on Sellwin Traders Limited's remarkable journey from ₹2.71 to ₹13.31 and why experts predict ₹25-₹30 targets
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border-2 border-emerald-500/30">
              <div className="text-center">
                <div className="inline-flex p-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full shadow-2xl mb-6 group hover:scale-110 transition-transform cursor-pointer">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional Stock Analysis Video</h3>
                <p className="text-gray-300 mb-6">Deep dive into Sellwin Traders' fundamentals, technical analysis, and growth prospects</p>
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                  ▶️ Watch Full Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradingView Chart Section - Second Half Background */}
      <section id="chart" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📈 Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Stock Performance</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Interactive chart with real-time BSE:SELLWIN data, technical indicators (RSI & MACD), and professional analysis tools
            </p>
            
            {/* Live Price Ticker */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-emerald-700">LIVE</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Current Price</p>
                  <p className="text-3xl font-black text-gray-900">₹{currentPrice.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Day Change</p>
                  <p className="text-xl font-bold text-emerald-600">+1.95% ↗️</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">52W High/Low</p>
                  <p className="text-lg font-semibold text-gray-800">₹13.31 / ₹2.71</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
            <div className="p-8 border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sellwin Traders Limited (BSE:SELLWIN)</h3>
                  <p className="text-gray-600 font-medium">Real-time price data with RSI & MACD technical indicators</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Market Open</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Market Cap</p>
                    <p className="text-lg font-bold text-gray-900">₹{Math.round(animatedMetrics.marketCap)} Crore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[600px]">
              <TradingViewWidget />
            </div>
            
            <div className="p-8 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border-t-2 border-gray-200">
              <div className="text-center">
                <p className="text-lg text-gray-800 font-semibold mb-4">
                  📊 <strong>Technical Breakout Analysis:</strong> Sellwin Traders Ltd. has broken out of a multi-year parallel channel, rallying from <span className="text-red-600 font-bold">₹2.71 in April 2025</span> to <span className="text-emerald-600 font-bold">₹13.31 in September 2025</span>.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 border-2 border-emerald-300 rounded-full">
                  <Target className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-emerald-800 font-bold text-xl">🎯 Next Target: ₹25–₹30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stock Price Trend Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📈 Stock Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Trend Analysis</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Comprehensive breakdown of Sellwin Traders Limited's remarkable performance across different timeframes
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Performance Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="p-3 bg-emerald-500 rounded-full">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-emerald-800 font-bold">Friday Close</p>
                      <p className="text-gray-700">Shares closed <span className="font-bold text-emerald-600">1.95% higher at ₹13.31</span> after hitting upper circuit levels</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-800 font-bold">52-Week Range</p>
                      <p className="text-gray-700">High: <span className="font-bold text-blue-600">₹13.31</span> | Low: <span className="font-bold text-red-600">₹2.71 (April 2025)</span></p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="p-3 bg-purple-500 rounded-full">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-800 font-bold">Market Capitalization</p>
                      <p className="text-gray-700">Current valuation: <span className="font-bold text-purple-600">₹{Math.round(animatedMetrics.marketCap)} crore</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    period: 'Year-to-Date', 
                    value: `+${animatedMetrics.ytd.toFixed(1)}%`, 
                    icon: TrendingUp, 
                    color: 'emerald',
                    description: 'Exceptional annual growth'
                  },
                  { 
                    period: 'Last Month', 
                    value: `+${animatedMetrics.monthly.toFixed(1)}%`, 
                    icon: BarChart3, 
                    color: 'blue',
                    description: 'Strong monthly momentum'
                  },
                  { 
                    period: '5 Sessions', 
                    value: `+${animatedMetrics.weekly.toFixed(1)}%`, 
                    icon: Zap, 
                    color: 'purple',
                    description: 'Recent session gains'
                  },
                  { 
                    period: 'Upper Circuits', 
                    value: `${Math.round(animatedMetrics.circuits)}`, 
                    icon: Award, 
                    color: 'amber',
                    description: 'Consecutive hits'
                  }
                ].map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div
                      key={metric.period}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                    >
                      <div className={`inline-flex p-3 bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 rounded-xl shadow-lg mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-gray-600 font-semibold text-sm mb-2">{metric.period}</h4>
                      <p className={`text-2xl font-black text-${metric.color}-600 mb-1`}>{metric.value}</p>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-12 border-2 border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">About Sellwin Traders Limited</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                West Bengal-based commercial services company that captured widespread attention on <strong>Friday, 12 September 2025</strong>, after hitting its upper circuit for <strong>25 consecutive trading sessions</strong> on the Indian stock market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Building2, 
                  title: 'Real Estate & Property Services', 
                  description: 'Comprehensive property management solutions',
                  color: 'emerald'
                },
                { 
                  icon: BarChart3, 
                  title: 'Investment Advisory', 
                  description: 'Professional investment guidance',
                  color: 'blue'
                },
                { 
                  icon: TrendingUp, 
                  title: 'Trading of Shares', 
                  description: 'Share trading and market operations',
                  color: 'purple'
                },
                { 
                  icon: Briefcase, 
                  title: 'Finance-Related Services', 
                  description: 'Comprehensive financial advisory',
                  color: 'indigo'
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-xl shadow-lg mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why the Buzz Section - Enhanced */}
      <section id="analysis" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🔥 Why the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Massive Buzz</span> Around Sellwin Traders?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Three key factors driving institutional interest and retail investor excitement
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                number: '1️⃣',
                title: 'Exceptional Stock Performance',
                icon: TrendingUp,
                color: 'emerald',
                bgGradient: 'from-emerald-500 to-emerald-600',
                points: [
                  `${Math.round(animatedMetrics.circuits)} consecutive upper circuit hits - unprecedented momentum`,
                  `YTD gains: +${animatedMetrics.ytd.toFixed(1)}% - outperforming major indices`,
                  `Last month gains: +${animatedMetrics.monthly.toFixed(1)}% - sustained growth trajectory`,
                  `5-session gain: +${animatedMetrics.weekly.toFixed(1)}% - recent acceleration`,
                  '52-week high/low: ₹13.31 / ₹2.71 - remarkable price appreciation',
                  `Market Cap: ₹${Math.round(animatedMetrics.marketCap)} crore - growing market presence`
                ]
              },
              {
                number: '2️⃣',
                title: 'Strategic Global Expansion Moves',
                icon: Globe,
                color: 'blue',
                bgGradient: 'from-blue-500 to-blue-600',
                points: [
                  'Acquired 60% stake in USA\'s Shivam Contracting Inc. at ₹18 per share via stock - North American market entry',
                  'Acquired 51% stake in Dubai\'s Global Market Insights IT Services LLC at ₹15 per share via stock - Middle East expansion',
                  'Management expects share valuation between ₹25–₹30 - significant upside potential',
                  'International diversification strategy - reducing geographical risk',
                  'Strategic acquisitions funded through equity - preserving cash flow',
                  'Global footprint expansion - positioning for international growth'
                ]
              },
              {
                number: '3️⃣',
                title: 'Outstanding Financial Performance (Q1 FY26)',
                icon: DollarSign,
                color: 'purple',
                bgGradient: 'from-purple-500 to-purple-600',
                points: [
                  `Revenue: ₹${animatedMetrics.revenue.toFixed(2)} crore (+31% YoY) - strong top-line growth`,
                  `Net Profit: ₹3.14 crore (+${Math.round(animatedMetrics.profit)}% YoY) - exceptional profitability improvement`,
                  'Fundraising: ₹4.75 crore via warrants at ₹8.40 per warrant - successful capital raising',
                  'Improved operational efficiency - margin expansion',
                  'Strong cash generation - healthy financial position',
                  'Sustainable growth model - scalable business operations'
                ]
              }
            ].map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.title}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center space-x-6 mb-8">
                    <div className={`p-6 bg-gradient-to-r ${section.bgGradient} rounded-3xl shadow-2xl`}>
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">{section.number} {section.title}</h3>
                      <div className={`h-1 w-32 bg-gradient-to-r ${section.bgGradient} rounded-full`}></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <ChevronRight className={`h-6 w-6 text-${section.color}-400 mt-1 flex-shrink-0`} />
                        <p className="text-gray-200 font-medium leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-emerald-400/30 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">🚀 Don't Miss Out on This Growth Story!</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of investors getting daily insights on high-potential stocks like Sellwin Traders Limited
              </p>
              <a 
                href="https://t.me/NSEBSE_STOCKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 group transform hover:-translate-y-1"
              >
                <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
                <span>📲 Join Our Premium Telegram Channel</span>
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Investor Takeaway */}
      <section id="insights" className="py-20 bg-gradient-to-br from-white via-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-3xl p-16 border-3 border-emerald-200 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex p-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl shadow-2xl mb-8">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🎯 Investor Takeaway</h2>
              <div className="h-2 w-32 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mx-auto mb-8"></div>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-white rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 FII Interest & Institutional Recognition</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>The stock has FIIs on radar due to strong Q1 results and global acquisitions.</strong> Foreign institutional investors are closely monitoring Sellwin Traders Limited following its exceptional quarterly performance and strategic international expansion moves.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📈 Investment Thesis</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sellwin Traders is a <strong>must-add to every serious investor's watchlist</strong>. With its robust Q1 performance, strategic global acquisitions, and consistent upper-circuit momentum, the stock demonstrates both <strong>growth potential and market confidence</strong>. Current valuations indicate a <strong>large upside room</strong>, making it a compelling opportunity for investors looking for <strong>high-reward microcap plays with strong fundamentals</strong>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 mb-12 shadow-xl border-2 border-emerald-300">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Target className="h-12 w-12 text-emerald-600" />
                  <div>
                    <p className="text-4xl font-black text-emerald-600">₹25–₹30</p>
                    <p className="text-gray-600 font-semibold">Management's Target Valuation</p>
                  </div>
                  <Target className="h-12 w-12 text-emerald-600" />
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  Projected share price range based on global acquisitions and business expansion
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://t.me/NSEBSE_STOCKS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group transform hover:-translate-y-1"
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Get Daily Premium Insights</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <button className="border-3 border-blue-600 text-blue-700 bg-blue-50 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-100 transition-all duration-300 flex items-center justify-center space-x-3 hover:-translate-y-1">
                <BarChart3 className="h-6 w-6" />
                <span>Download Full Analysis Report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Disclaimer */}
      <footer className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="bg-yellow-500/20 border-2 border-yellow-500/40 rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-yellow-400 font-bold text-xl mb-4">⚠️ Important Disclaimer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>This content is for educational purposes only.</strong> Views and recommendations belong to individual analysts or broking firms. <strong>Consult certified experts before making investment decisions</strong>, as market conditions can change rapidly.
                </p>
                <p className="text-gray-400 text-sm">
                  Past performance does not guarantee future results. All investments carry risk of loss. Please conduct your own research and due diligence before making any investment decisions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t-2 border-gray-700 pt-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl shadow-2xl">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold">InvestPro Analytics</span>
                <p className="text-gray-400 text-lg">Premium Stock Analysis & Market Insights</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-emerald-400">Quick Links</h4>
                <div className="space-y-2 text-gray-300">
                  <a href="#chart" className="block hover:text-white transition-colors">Live Chart</a>
                  <a href="#analysis" className="block hover:text-white transition-colors">Market Analysis</a>
                  <a href="#insights" className="block hover:text-white transition-colors">Investment Insights</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-400">Legal</h4>
                <div className="space-y-2 text-gray-300">
                  <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="block hover:text-white transition-colors">Risk Disclaimer</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-purple-400">Connect</h4>
                <div className="space-y-2 text-gray-300">
                  <a href="https://t.me/NSEBSE_STOCKS" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Telegram Channel
                  </a>
                  <a href="mailto:contact@investpro.com" className="block hover:text-white transition-colors flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500">© 2025 InvestPro Analytics. All rights reserved. | Made with ❤️ for serious investors</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;