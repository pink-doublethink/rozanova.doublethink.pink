import type { Component } from 'solid-js';
import { Route, Router, Routes } from 'solid-app-router'
import { lazy, Suspense } from 'solid-js'
import {Header, Loader} from "../components";


const Home = lazy(() => import('../pages/Home'));
const Biography = lazy(() => import('../pages/Biography'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Legacy = lazy(() => import('../pages/Legacy'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App: Component = () => {
  return (
    <div>
      <Router>
        <Header />
        <main class="main">
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="bio" element={<Biography />} />
              <Route path="contact" element={<Contacts />} />
              <Route path="legacy" element={<Legacy />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default App;
