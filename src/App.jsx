import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeContext';
import Home from './pages/Home';
import Lists from './pages/Lists';
import Ecommerce from './pages/Ecommerce';
import Chat from './pages/Chat';
import SimpleHtml from './pages/SimpleHtml';
import OpenAIExamples from './pages/OpenAIExamples';
import ClaudeExamples from './pages/ClaudeExamples';
import OpenAIExamplesV2 from './pages/OpenAIExamplesV2';
import ClaudeV2 from './pages/ClaudeV2';
import { GeminiExamples } from './pages/GeminiExamples';
import Layout from './structure/Layout';
import { ROUTES } from './themes/NavConstants';


createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
            {/* Parent Route controls the Layout */}
            <Route path="/" element={<Layout />}>
               {/* Index element controls the default page */}
               <Route index element={<Home />} />
               {/* These routes display to the user and map to your different pages. */}
               <Route path={ROUTES.HOME} element={<Home />} />
               <Route path={ROUTES.LISTS} element={<Lists />} />
               <Route path={ROUTES.ECOMMERCE} element={<Ecommerce />} />
               <Route path={ROUTES.CHAT} element={<Chat />} />
               <Route path={ROUTES.SIMPLE_HTML} element={<SimpleHtml />} />
               <Route path={ROUTES.OPENAI_EXAMPLES} element={<OpenAIExamples />} />
               <Route path={ROUTES.CLAUDE_EXAMPLES} element={<ClaudeExamples />} />
               <Route path={ROUTES.OPENAI_V2} element={<OpenAIExamplesV2 />} />
               <Route path={ROUTES.CLAUDE_V2} element={<ClaudeV2 />} />
               <Route path={ROUTES.GEMINI_EXAMPLES} element={<GeminiExamples />} />
            </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider> 
    </React.StrictMode>
  </>
);


//const container = document.getElementById('app');
//hydrateRoot(container, <Home tab="home" />);
// Unlike with createRoot, you don't need a separate root.render() call here.
