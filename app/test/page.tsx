// import NavBar from "../components/navBar";

export default function Test() {
    return (
      <main className="p-24">
        <div className="text-sm lg:flex">
          <div className="ml-10 mt-10 mb-10">
            <div className="flex justify-center text-9xl font-bold">
              <h1 id="main-grad" className="text-10xl font-bold">Test</h1>
            </div>
          </div>
        </div>
        <hr className="mt-5 w-full" style={{
          color: "white",
          backgroundColor: "white",
          opacity: "50%",
          height: 2 // Adjust height as needed
        }} />
      </main>
    );
  }