import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { Newbook } from "./pages/books/components/newbook";
import { Profile } from "./pages/profile/profile";
import { Obuna } from "./pages/profile/obuna";
import { Hisob } from "./pages/profile/hisob";
import { Kitoblarim } from "./pages/profile/kitoblarim";
import { Saqlanganlar } from "./pages/profile/saqlanganlar";
import { Sozlamalar } from "./pages/profile/sozlamalar";
import { TungiRejim } from "./pages/profile/tungirejim";
import { ProfileLoyout } from "./layout/profil-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/newbook/:id" element={<Newbook />} />
          <Route path="profile" element={<ProfileLoyout />}>
            <Route index element={<Profile />} />
            <Route path="obuna" element={<Obuna />} />
            <Route path="xisob" element={<Hisob />} />
            <Route path="kitoblarim" element={<Kitoblarim />} />
            <Route path="saqlangan" element={<Saqlanganlar />} />
            <Route path="sozlamalar" element={<Sozlamalar />} />
            <Route path="tungi" element={<TungiRejim />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
