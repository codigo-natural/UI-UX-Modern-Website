import ButtonGradient from "./assets/svg/ButtonGradient";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <p className="text-3xl font-bold text-center">Hola new ui</p>;
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10">something</Button>
      </div>
      <ButtonGradient />
    </>
  );
};
