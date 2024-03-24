interface AppProps {
  children: React.ReactNode;
}
function App({ children }: AppProps) {
  return <div className="bg-background text-text min-h-screen">{children}</div>;
}

export default App;
