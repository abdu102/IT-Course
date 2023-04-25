import React, { useRef } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Character } from "./pages/Character/Character";
import { Episode } from "./pages/Episode/Episode";
import { Location } from "./pages/Location/Location";
import { SIngleCharacter } from "./pages/SingleCharacter/SIngleCharacter";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/episode" element={<Episode/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/singlecharacter/:id" element={<SIngleCharacter/>}/>
      </Routes>
    </>
  );
}

export default App;
