import Image from "next/image";

import { gql } from "@apollo/client";
import { getClient } from "lib/client";
import { About } from "types";

const AboutContent = async () => {
  const { data } = await getClient().query<{ about: About }>({
    query: gql`
      query GetAbout {
        about(where: { id: "cln4y2kmhbgbg0blx46ffbmyq" }) {
          aboutText
          image {
            url
          }
        }
      }
    `,
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 * 24 * 15 }, // revalidate every 15 days
      },
    },
  });

  return (
    <section className="mt-12 flex flex-wrap gap-12 justify-center">
      <div className="relative h-80 aspect-[3/4]">
        <Image
          className="rounded-md object-cover"
          src={data.about.image.url}
          alt="Profile image"
          fill
          sizes="100%"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
        />
      </div>

      <div className="flex flex-col gap-4 max-w-xl justify-center">
        <p className="whitespace-pre-line">{data.about.aboutText}</p>
      </div>
    </section>
  );
};

export default AboutContent;
