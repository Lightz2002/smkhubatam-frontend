import axios from "axios";

export async function fetchapi(url, method = "get", headers = {}) {
  const data = await axios(url);
  return data.data;
}

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const InputChangeHandler = (input, forms, setForms) => {
  setForms(
    forms.map((form) => {
      if (input.target.role === "option") {
        if (form.type === "autocomplete") {
          return {
            ...form,
            selectedValue: {
              label: input.target.textContent,
              id: +input.target.value,
            },
          };
        }
      }
      if (form.name !== input.target.name) return form;

      let result = {};
      switch (input.target.type) {
        case "radio":
          result = {
            ...form,
            selectedValue: input.target.value,
          };
          break;

        case "text":
        default:
          result = {
            ...form,
            value: input.target.value,
          };
          break;
      }
      return result;
    })
  );
};
