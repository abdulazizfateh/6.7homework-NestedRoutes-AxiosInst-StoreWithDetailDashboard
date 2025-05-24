import './App.css'
// Route
import { Routes, Route, } from 'react-router-dom'
// Layout 
import Layout from './pages/layout/Layout'
// Pages
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Posts from './pages/posts/Posts'
import Users from './pages/users/Users'
import SignIn from './pages/signin/SignIn'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import PostsDetail from './pages/posts-detail/PostsDetail'
import UserDetail from './pages/user-detail/UserDetail'



function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/post/:id' element={<PostsDetail />} />
          <Route path='/user/:id' element={<UserDetail />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
