

export default function Contact() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        {/* Create typewriter in text */}
        <div id="header" className="flex justify-center lsitems-center mt-10 mb-10">
          <h1 className="flex justify-center text-4xl dark:text-white">
            <Typewriter text='Contact' speed={90}/>
          </h1>
        </div>
        <div id="contact" className=""></div>
      </div>
    </main>
    )
}