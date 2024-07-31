import { Center, Image } from "@mantine/core";

export default function AdoptionPage() {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-4 bg-[url('/src/assets/bg-pattern.svg')] md:py-5 md:pr-20 ">
        <div>
          <Center>
            <Image
              className="mr-7 md:mr-0 pt-4 md:pt-0 md:ml-28"
              src="/src/assets/adoption.png"
              w={300}
              h={300}
            ></Image>
          </Center>
        </div>
        <div className="md:text-5xl md:pt-20 text-3xl pt-5">
          <p className="flex justify-center md:block">Find the Right </p>
          <p className="flex justify-center md:block">Cat for You</p>
          <div className="md:text-5xl text-xl">
            <p className="md:text-xl md:pt-1">
              Tak hanya manusia yang butuh rumah, hewan pun perlu...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
