import imag from "../assets/image6.webp";
import imag1 from "../assets/image5.jpeg";
import me from "../assets/me.jpeg";

export default () => {
  const team = [
    {
      img: imag,
      name: "Martiana dialan",
      title: "Product designer",
    },
    {
      img: imag1,
      name: "Rupak Rawal",
      title: "Software engineer",
    },
    {
      img: me,
      name: "Rupak Rawal",
      title: "Software engineer",
    },
    {
      img: imag1,
      name: "Rupak Rawal",
      title: "Software engineer",
    },
    {
      img: imag1,
      name: "Rupak Rawal",
      title: "Software engineer",
    },
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-serif sm:text-4xl">
            Our team
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2  text-center md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg  text-primary-350">{item.name}</h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
