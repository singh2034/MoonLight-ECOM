const Contact = () => {
  return (
    <>
      <section id="contact" className="py-10 ">
        <div className="w-[89%] max-width-[1400px] m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Email Address</h1>
                <a href="mailto:singhaayush2034@gmail.com">
                  support@moonlamps.com
                </a>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">TelePhone</h1>
                <p>(+91) 99587-21272 (+91) 97164-30248</p>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Address</h1>
                <h2 className="text-gray-500 text-sm">
                  New-Delhi, Delhi, India 110003
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="lg:col-span-2">
            <form>
              <div className="space-y-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-3"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-3"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-3"
                />
                <textarea
                  className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-3"
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  rows={7}
                  style={{ resize: "none" }}
                />
                <div className="text-right ">
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-lg text-white cursor-pointer bg-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
