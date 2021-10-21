import { Image } from "../Types/Image";
import { storage } from "../Firebase/firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 as createID } from "uuid";

export const getAllImages = async () => {
  let list: Image[] = [];

  const imagesFolder = ref(storage, "assets");
  const imageList = await listAll(imagesFolder);

  for (let i in imageList.items) {
    let imageUrl = await getDownloadURL(imageList.items[i]);
    list.push({
      name: imageList.items[i].name,
      url: imageUrl,
    });
  }
  return list;
};

export const insert = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = createID();
    let newFile = ref(storage, `assets/${randomName}`);
    let upload = await uploadBytes(newFile, file);
    let imageURL = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: imageURL,
    } as Image;
  } else {
    return new Error("Tipo de arquivo não permitido.");
  }
};

export const deleteImage = async (name: string) => {
  let imageRef = ref(storage, `assets/${name}`);
  try {
    await deleteObject(imageRef);
  } catch (err) {
    return new Error("Não foi possível excluir este item.");
  }
};
