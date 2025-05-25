import './App.css'
// Route
import { Routes, Route, } from 'react-router-dom'
// Layout 
import Layout from './pages/layout/Layout'
// Main Pages
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Posts from './pages/posts/Posts'
import Users from './pages/users/Users'
import SignIn from './pages/signin/SignIn'
// Detail Pages
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import PostsDetail from './pages/posts-detail/PostsDetail'
import UserDetail from './pages/user-detail/UserDetail'
// Dashboard Page
import Dashboard from './pages/dashboard/Dashboard'
import MyGroups from './pages/dashboard/my-groups/MyGroups'
import Stats from './pages/dashboard/stats/Stats'
import Ranking from './pages/dashboard/ranking/Ranking'
import Payments from './pages/dashboard/payments/Payments'
import Store from './pages/dashboard/store/Store'
import ExtraLessons from './pages/dashboard/extra-lessons/ExtraLessons'
import Support from './pages/dashboard/support/Support'
import ContactWithStore from './pages/dashboard/contact-with-store/ContactWithStore'
import Settings from './pages/dashboard/settings/Settings'

function App() {
  return (
    <>
      <Routes>
        // Main Pages
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFound />} />
          // Detail Pages
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/post/:id' element={<PostsDetail />} />
          <Route path='/user/:id' element={<UserDetail />} />
        </Route>

        // Dashboard Page
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<MyGroups />}></Route>
          <Route path='statistics' element={<Stats />}></Route>
          <Route path='ranking' element={<Ranking />}></Route>
          <Route path='payments' element={<Payments />}></Route>
          <Route path='store' element={<Store />}></Route>
          <Route path='extra-lessons' element={<ExtraLessons />}></Route>
          <Route path='support' element={<Support />}></Route>
          <Route path='contact' element={<ContactWithStore />}></Route>
          <Route path='settings' element={<Settings />}></Route>
        </Route>

        // Sign In Page
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
