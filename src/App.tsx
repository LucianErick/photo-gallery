import { useState, useEffect, FormEvent } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import * as C from "./App.styles";
import "./App.css";

import { ImageItem } from "./Components/ImageItem";

import { Image } from "./Types/Image";

import * as Images from "./Services/images";

function App() {
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Image[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setLoadedImages(await Images.getAllImages());
      setLoading(false);
    };
    getImages();
  }, []);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Images.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newImageList = [...loadedImages];
        newImageList.push(result);
        setLoadedImages(newImageList);
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" placeholder="Escolha um arquivo" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>
        {loading && (
          <C.ScreenWarning>
            <AiOutlineLoading size="2rem" id="loading" />
          </C.ScreenWarning>
        )}
        {!loading && loadedImages.length === 0 && (
          <C.ScreenWarning>
            <span>Não há fotos cadastradas.</span>
          </C.ScreenWarning>
        )}
        {!loading && loadedImages.length !== 0 && (
          <C.ImageList>
            {loadedImages.map((item, index) => {
              return <ImageItem key={index} url={item.url} name={item.name} />;
            })}
          </C.ImageList>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
