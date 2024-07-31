import { Center, Image } from "@mantine/core";

export default function AdoptionPage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-[url('/src/assets/bg-pattern.svg')] py-5 pr-20 ">
        <div>
          <Center>
            <Image src="/src/assets/adoption.png" w={300} h={300}></Image>
          </Center>
        </div>
        <div className="text-5xl pt-24">
          <p>Find the Right </p>
          <p>Cat for You</p>
          <div className="text-5xl">
            <p className="text-xl">
              Tak hanya manusia yang butuh rumah, hewan pun perlu...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
