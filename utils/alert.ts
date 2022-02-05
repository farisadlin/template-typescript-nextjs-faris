import Swal from "sweetalert2";
const { find } = require("lodash");

export const Success = async (id: number, name: string, image: string) => {
  await Swal.fire({
    icon: "success",
    title: "Success",
    text: "Success",
  });
};

export const Failed = async () => {
  await Swal.fire({
    icon: "error",
    title: "Error",
    text: "Error",
  });
};
