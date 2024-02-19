"use client";
import { useState } from "react";
import axios from "axios";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (name == "" && email == "") {
      setLoading(false);
      alert("Please enter both name & email id");
      return false;
    }

    await axios
      .post("/api/send", { name, email })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data && data.id) {
          alert(
            `Thank you for your interest ${name}! We will get back to you soon!`
          );
          setName("");
          setEmail("");
        } else {
          alert("Apologies! Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };
  return (
    <main className="flex">
      <div
        className={`flex w-full flex-col items-center p-24 min-h-screen -mt-4`}
      >
        <div className="relative flex flex-col  max-w-xl gap-4 ">
          <div className="flex flex-col gap-10">
            <svg
              width="230"
              height="38"
              viewBox="0 0 188 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8492 0.202026C25.5254 0.202026 31.7482 6.42486 31.7482 14.101C31.7482 21.7771 25.5254 28 17.8492 28V0.202026Z"
                fill="#F66135"
              />
              <path
                d="M8.01166 0C15.3615 2.21331 19.5268 9.96358 17.3135 17.3135C15.102 24.6633 7.34989 28.8286 0 26.6153L8.01166 0Z"
                fill="#F66135"
              />
              <path
                d="M39.7655 3.39417H48.0145C52.3466 3.39417 54.8621 5.90965 54.8621 9.25374C54.8621 11.2928 53.8426 12.9482 52.2502 13.8713V14.0623C53.7147 14.6666 55.5943 16.2589 55.5943 19.2211C55.5943 23.3289 52.3466 25.6869 48.6522 25.6869H39.7674V3.39417H39.7655ZM47.5047 12.5663C49.4474 12.5663 50.6579 11.3874 50.6579 9.66897C50.6579 7.95058 49.4159 6.89767 47.5696 6.89767H43.8437V12.5663H47.5066H47.5047ZM47.6011 22.0888C49.6717 22.0888 51.1362 21.0693 51.1362 18.8726C51.1362 16.676 49.4159 15.7195 47.4732 15.7195H43.8437V22.0888H47.6011Z"
                fill="#070707"
              />
              <path
                d="M57.3146 17.4081C57.3146 12.1529 60.4993 8.52332 65.0854 8.52332C67.9827 8.52332 69.6084 10.2436 70.1812 11.1037H70.4036V8.93855H74.543V25.6905H70.4667V23.5569H70.2442C69.766 24.2576 68.27 26.1039 65.2114 26.1039C60.5289 26.1039 57.3127 22.6004 57.3127 17.41M70.4982 17.347C70.4982 14.1938 68.587 12.2826 65.9751 12.2826C63.3633 12.2826 61.517 14.3847 61.517 17.347C61.517 20.3092 63.3317 22.3798 66.0066 22.3798C68.6816 22.3798 70.4963 20.1498 70.4963 17.347"
                fill="#070707"
              />
              <path
                d="M77.5052 4.28579C77.5052 2.85288 78.5562 1.89636 80.0522 1.89636C81.5481 1.89636 82.5992 2.85102 82.5992 4.28579C82.5992 5.72056 81.5481 6.70673 80.0522 6.70673C78.5562 6.70673 77.5052 5.78359 77.5052 4.28579ZM77.9834 8.93489H82.1228V25.6868H77.9834V8.93675V8.93489Z"
                fill="#070707"
              />
              <path
                d="M85.5614 8.93668H89.4783V11.6765H89.7323C90.2735 10.3715 91.8028 8.87366 94.1274 8.87366H95.6567V12.8221H93.9365C91.2931 12.8221 89.7007 14.7647 89.7007 17.7585V25.6886H85.5614V8.93668Z"
                fill="#070707"
              />
              <path
                d="M96.8042 17.4081C96.8042 12.1214 100.339 8.52332 105.244 8.52332C110.627 8.52332 113.556 12.5051 113.556 17.2172V18.5241H100.817C100.945 21.0711 102.697 22.7913 105.372 22.7913C107.411 22.7913 108.97 21.8366 109.545 20.4668H113.399C112.57 23.8739 109.576 26.1039 105.246 26.1039C100.31 26.1039 96.806 22.4094 96.806 17.41M109.61 15.5952C109.419 13.3337 107.667 11.8377 105.246 11.8377C102.825 11.8377 101.138 13.4931 100.882 15.5952H109.608H109.61Z"
                fill="#070707"
              />
              <path
                d="M115.465 20.6559H119.288C119.447 22.0888 120.593 22.8525 122.472 22.8525C124.352 22.8525 125.466 22.0239 125.466 20.8468C125.466 17.2803 115.849 20.6559 115.849 13.6488C115.849 10.8145 118.302 8.52148 122.441 8.52148C126.072 8.52148 128.779 10.3696 129.033 13.7119H125.37C125.179 12.5014 124.224 11.7062 122.408 11.7062C120.719 11.7062 119.636 12.4384 119.636 13.5209C119.636 16.7056 129.478 13.3615 129.478 20.6225C129.478 23.8072 126.897 26.1002 122.408 26.1002C117.918 26.1002 115.625 23.9666 115.465 20.654"
                fill="#070707"
              />
              <path
                d="M132.664 3.39417H140.179C147.281 3.39417 151.55 7.98024 151.55 14.4775C151.55 21.3881 147.283 25.6887 140.179 25.6887H132.664V3.39417ZM140.022 21.9924C143.938 21.9924 147.155 19.6994 147.155 14.4756C147.155 9.25188 143.97 7.08675 140.022 7.08675H136.9V21.9943H140.022V21.9924Z"
                fill="#070707"
              />
              <path
                d="M153.428 17.4081C153.428 12.1214 156.963 8.52332 161.868 8.52332C167.251 8.52332 170.18 12.5051 170.18 17.2172V18.5241H157.441C157.569 21.0711 159.321 22.7913 161.996 22.7913C164.035 22.7913 165.595 21.8366 166.168 20.4668H170.022C169.193 23.8739 166.2 26.1039 161.869 26.1039C156.933 26.1039 153.429 22.4094 153.429 17.41M166.233 15.5952C166.042 13.3337 164.29 11.8377 161.869 11.8377C159.449 11.8377 157.762 13.4931 157.506 15.5952H166.231H166.233Z"
                fill="#070707"
              />
              <path
                d="M170.658 8.93677H174.99L178.97 20.7523H179.226L183.174 8.93677H187.601L181.454 25.6887H176.773L170.658 8.93677Z"
                fill="#070707"
              />
            </svg>
            <p className="text-lg text-gray-600">
              Thanks for your interest. Enter your name and details so we can
              connect you with one of our team.
            </p>
          </div>
          <form
            className="mt-6 flex flex-col  max-w-xl gap-4 z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="font-normal text-gray-700">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                className="rounded-sm w-full mt-1  bg-white/5 px-3 py-2.5 outline-none text-black border border-gray-400/80 text-sm"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                Your work email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="rounded-sm w-full bg-white/5 mt-1 px-3.5 py-2.5 outline-none text-black border border-gray-400/80  text-sm "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <h3 className="font-normal text-gray-700 mb-3">
                Select your service
              </h3>
              <div className="flex md:flex-row flex-col justify-between">
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    Web Development
                  </label>
                </span>

                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    App Development
                  </label>
                </span>
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    AI Integration
                  </label>
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                How can we help?
              </label>
              <textarea
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="rounded-sm w-full mt-1  h-24 bg-white/5 px-3.5 py-2.5 outline-none text-black border border-gray-400/80 text-sm "
                placeholder="Tell us how we can help."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md py-[0.6rem] px-[1rem] text-sm flex items-center font-semibold bg-gray-900 text-white hover:bg-gray-800"
              >
                {loading ? (
                  <div
                    style={{
                      borderTopColor: "transparent",
                    }}
                    className="w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                  ></div>
                ) : (
                  <>
                    {"Get started"}&nbsp;&nbsp;&nbsp;
                    <svg
                      width="24"
                      height="24"
                      class="transition-colors duration-300 w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 13L17.17 13L13.59 16.59L15 18L21 12L15 6L13.59 7.41L17.17 11L3 11L3 13Z"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gray-900/85 w-[37%] pt-20  px-4 flex flex-col  text-center">
        <h3 className="text-white text-2xl pb-10">
          Amazing Clients who trust us
        </h3>
        <div className="h-28 w-32 mx-auto">
          <img
            className="object-contain invert"
            src="google.png"
            alt="google"
          />
        </div>
        <div className="h-28 w-32 mx-auto">
          <img
            className="object-contain invert"
            src="google.png"
            alt="google"
          />
        </div>
        <div className="h-28 w-32 mx-auto">
          <img
            className="object-contain invert"
            src="google.png"
            alt="google"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
