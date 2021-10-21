import { useState } from "react";
import * as C from "./styles";
import { deleteImage } from "../../Services/images";
import { BiTrash } from "react-icons/bi";

type Props = {
  url: string;
  name: string;
};

export const ImageItem = ({ url, name }: Props) => {
  const [isHoverring, setIsHoverring] = useState(false);

  function handleHoverIn() {
    setIsHoverring(true);
  }

  function handleHoverOut() {
    setIsHoverring(false);
  }

  async function handleDeleteImage(name: string) {
    let deleteOperation = await deleteImage(name);
    deleteOperation instanceof Error ? alert(deleteOperation.message) : alert("Imagem excluída com sucesso!");
    window.location.reload()
  }

  return (
    <C.Container onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>      
      {isHoverring && (
        <C.ShowMoreOptions>
          <BiTrash size="1.25rem" onClick={() => handleDeleteImage(name)} />
        </C.ShowMoreOptions>
      )}
      <img src={url} alt={name} />
      <div>{name}</div>
    </C.Container>
  );
};
