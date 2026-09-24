import { useState } from 'react'
import { MapPin, Search, Bell, Clock, Navigation, Heart, User, Flame, Leaf, CakeSlice, Utensils, IceCream, AlertCircle } from 'lucide-react'

function App() {
  const [activeFilter, setActiveFilter] = useState('Near Me')
  const [hasDeals, setHasDeals] = useState(true)

  const foodDeals = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
      restaurant: 'Green Garden Restaurant',
      name: 'Chicken Rice Box',
      originalPrice: 12,
      discountedPrice: 6,
      quantity: 2,
      pickupStart: '20:00',
      pickupEnd: '21:00',
      distance: 0.8,
      closingTime: '21:30',
      endingSoon: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      restaurant: 'Bella Italia',
      name: 'Margherita Pizza',
      originalPrice: 16,
      discountedPrice: 8,
      quantity: 3,
      pickupStart: '19:30',
      pickupEnd: '20:30',
      distance: 1.2,
      closingTime: '21:00',
      endingSoon: true,
      timeLeft: 45
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      restaurant: 'Fresh Bowl',
      name: 'Veggie Buddha Bowl',
      originalPrice: 14,
      discountedPrice: 7,
      quantity: 5,
      pickupStart: '20:00',
      pickupEnd: '21:00',
      distance: 0.5,
      closingTime: '22:00',
      endingSoon: false,
      vegetarian: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
      restaurant: 'Sweet Delights',
      name: 'Assorted Donuts',
      originalPrice: 10,
      discountedPrice: 5,
      quantity: 8,
      pickupStart: '18:00',
      pickupEnd: '19:00',
      distance: 0.3,
      closingTime: '19:30',
      endingSoon: true,
      timeLeft: 30,
      dessert: true
    }
  ]

  const restaurants = [
    {
      id: 1,
      name: 'Green Garden Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop',
      distance: 0.8,
      closingTime: '21:30',
      dealCount: 3
    },
    {
      id: 2,
      name: 'Bella Italia',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop',
      distance: 1.2,
      closingTime: '21:00',
      dealCount: 2
    },
    {
      id: 3,
      name: 'Fresh Bowl',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=200&h=200&fit=crop',
      distance: 0.5,
      closingTime: '22:00',
      dealCount: 4
    }
  ]

  const filters = ['Near Me', '50% Off', 'Vegetarian', 'Vegan', 'Bakery', 'Meals', 'Desserts', 'Ending Soon']

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-3 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-chilli-600" />
            <span className="text-xl font-bold text-gray-900">Chilli Shopping</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-chilli-600 rounded-full"></span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-chilli-600" />
          <span className="text-gray-700 font-medium">Near me</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Save Food. Save Money.</h1>
        <p className="text-gray-600 mb-4">Great food, up to 50% off, available near closing time.</p>
        
        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-chilli-600 to-chilli-500 rounded-2xl p-5 text-white mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white text-chilli-600 px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
            <span className="font-semibold">End-of-Day Deals</span>
          </div>
          <p className="text-white/90 text-sm mb-4">Restaurants near you are selling their remaining fresh food at special prices.</p>
          <button className="bg-white text-chilli-600 px-6 py-2.5 rounded-full font-semibold hover:bg-chilli-50 transition-colors">
            Explore Deals
          </button>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-chilli-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-chilli-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {hasDeals ? (
        <>
          {/* Food Deals */}
          <section className="px-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Today's Food Deals</h2>
              <span className="text-sm text-chilli-600 font-medium">See all</span>
            </div>
            
            <div className="grid gap-4">
              {foodDeals.map((deal) => (
                <div key={deal.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={deal.image} alt={deal.name} className="w-full h-40 object-cover" />
                    <span className="absolute top-3 left-3 bg-chilli-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      50% OFF
                    </span>
                    {deal.endingSoon && (
                      <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {deal.timeLeft} min left
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{deal.name}</h3>
                        <p className="text-sm text-gray-500">{deal.restaurant}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-chilli-600">€{deal.discountedPrice}</p>
                        <p className="text-sm text-gray-400 line-through">€{deal.originalPrice}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Pickup {deal.pickupStart}–{deal.pickupEnd}
                      </span>
                      <span className="flex items-center gap-1">
                        <Navigation className="w-4 h-4" />
                        {deal.distance} km
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-600">
                        Only {deal.quantity} left
                      </span>
                      <button className="bg-chilli-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-chilli-700 transition-colors">
                        Get Deal
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ending Soon Section */}
          <section className="px-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900">Ending Soon</h2>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {foodDeals.filter(deal => deal.endingSoon).map((deal) => (
                <div key={deal.id} className="min-w-[280px] bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={deal.image} alt={deal.name} className="w-full h-32 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{deal.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-chilli-600 font-bold">€{deal.discountedPrice}</span>
                      <span className="text-xs text-orange-500 font-medium">Available for {deal.timeLeft} more minutes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Restaurants Section */}
          <section className="px-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Restaurants Near You</h2>
              <span className="text-sm text-chilli-600 font-medium">See all</span>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="min-w-[200px] bg-white rounded-xl shadow-sm p-4">
                  <img src={restaurant.image} alt={restaurant.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                  <h3 className="font-semibold text-gray-900 text-center text-sm mb-2">{restaurant.name}</h3>
                  <div className="text-center text-xs text-gray-500 mb-3">
                    <p>{restaurant.distance} km away</p>
                    <p>Closes {restaurant.closingTime}</p>
                  </div>
                  <div className="text-center mb-3">
                    <span className="bg-chilli-100 text-chilli-700 px-3 py-1 rounded-full text-xs font-medium">
                      {restaurant.dealCount} deals
                    </span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                    View Deals
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Empty State */
        <section className="px-4 py-12 text-center">
          <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">No food deals nearby right now.</h2>
          <p className="text-gray-600 mb-6">Check again later — restaurants may add fresh deals closer to closing time.</p>
          <button className="bg-chilli-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-chilli-700 transition-colors">
            Notify Me When Deals Are Available
          </button>
        </section>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-chilli-600">
            <Flame className="w-6 h-6" />
            <span className="text-xs font-medium">Deals</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs">Orders</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Heart className="w-6 h-6" />
            <span className="text-xs">Favorites</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

function ChevronDown({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function Home({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function ShoppingBag({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

export default App
