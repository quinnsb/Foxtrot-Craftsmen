import { Switch, Route, Router as WouterRouter } from "wouter";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HeritageInn from "@/pages/work/HeritageInn";
import IronAndOak from "@/pages/work/IronAndOak";
import CopperheadBrew from "@/pages/work/CopperheadBrew";
import ApexAlpine from "@/pages/work/ApexAlpine";
import SterlingWright from "@/pages/work/SterlingWright";
import TimberSteakhouse from "@/pages/work/TimberSteakhouse";

const queryClient = new QueryClient();

function ScrollToProjectTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.startsWith("/work/")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work/heritage-inn" component={HeritageInn} />
      <Route path="/work/iron-and-oak" component={IronAndOak} />
      <Route path="/work/copperhead-brew" component={CopperheadBrew} />
      <Route path="/work/apex-alpine" component={ApexAlpine} />
      <Route path="/work/sterling-wright" component={SterlingWright} />
      <Route path="/work/soko-coffee" component={TimberSteakhouse} />
      <Route path="/work/timber-steakhouse" component={TimberSteakhouse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToProjectTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
