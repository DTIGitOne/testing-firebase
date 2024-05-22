export const getItemsWithPrefix = (prefix) => {
   const items = [];
   for (let i = 0; i < localStorage.length; i++) {
     const key = localStorage.key(i);
     if (key.startsWith(prefix)) {
       const item = localStorage.getItem(key);
       items.push({ key, value: JSON.parse(item) });
     }
   }
   return items;
 };