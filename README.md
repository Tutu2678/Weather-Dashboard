# 🌤️ Weather Dashboard

A fully-featured weather dashboard built with **React**, **Tailwind CSS**, and **Supabase**. It fetches real-time weather data from the **OpenWeatherMap API**, allows users to search cities, see current weather and a 5-day forecast, and includes user login functionality.

---

🚀 **Live Demo**: [weather-dashboard.vercel.app](https://weather-dashboard.vercel.app)

---

## 🚀 Features

- 🔍 City search with auto-refreshing weather data (every 30 seconds)
- 🌡️ Displays temperature, humidity, wind, and weather conditions
- 🌤️ Weather-based background gradients
- ⏱️ Real-time updates via polling
- 💾 LocalStorage: Remembers last searched city
- 🔁 Unit toggle: Celsius ↔ Fahrenheit
- 📆 5-day weather forecast
- 👤 Supabase authentication (Magic link to login)
- 📦 Clean component structure with React Context for global state

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **API**: OpenWeatherMap API
- **Auth**: Supabase
- **Data Fetching**: React Query

---

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Tutu2678/weather-dashboard.git](https://github.com/Tutu2678/Weather-Dashboard.git
cd weather-dashboard
'''

### 2. Install Dependencies
'''bash
npm install
'''

###3. Add Environment Variables
Create a .env file in the root of your project with:

'''bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
'''

### 4. Start the Development Server

'''bash
npm run dev
'''
