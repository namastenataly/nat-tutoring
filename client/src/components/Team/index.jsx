import "./team.css";

export default function Team() {
    return(
        <>
        <section className="team-section w-100vw h-auto pt-7 pb-96 bg-blue-100">
        <div className="mx-auto text-center relative isolate">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Meet the team
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our expert tutors are here to guide and support you with
              personalized, passionate instruction. Get to know the faces
              dedicated to your success!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16"
          >
            <li>
              <img
                src="/assets/images/nat.jpeg"
                alt="Nataly Gonzalez"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Nataly Gonzalez
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
              </div>
            </li>
            <li>
              <img
                src="/assets/images/andres.jpg"
                alt="Andres Zuniga"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Andres Zuniga 
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
              </div>
            </li>
            <li>
              <img
                src="/assets/images/daniela.jpg"
                alt="Daniela Mena"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Daniela Mena
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
              </div>
            </li>
          </ul>
        </div>
        </section>
        </>
    )
}
