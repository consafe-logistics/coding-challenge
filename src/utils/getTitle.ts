const getAddressTitle = (address: string) => {
  const path = document.location.href;

  return path.split('/').pop();
};

export default getAddressTitle;