// ============ ТОВАРИ ============
// Один ноутбук = один рядок у фігурних дужках { }. Після кожного рядка, крім останнього, стоїть кома.
// id - номер, b - бренд, n - назва, cpu - процесор, gpu - відеокарта (Nvidia GeForce GTX або AMD Radeon Graphics),
// ram - оперативна пам'ять, disk - диск, scr - діагональ екрана (15.6 або 17.3), price - ціна числом без пробілів, cond - стан,
// photos - список фото з папки images. Скільки завгодно: photos:["images/133.jpg","images/133-2.jpg","images/133-3.jpg"]
// Обсяг відеопам'яті на сайті підставляється сам: якщо ОЗУ від 12 ГБ - пишеться 8 ГБ, якщо менше - 6 ГБ.
// sold:"Продано" - ноутбук продано/відправлено: картка стає сірою, без кнопки "Купити", переходить в кінець списку.
// olx:"https://www.olx.ua/..." - посилання на оголошення цього ноутбука на OLX (під ціною з'явиться посилання).
// Щоб вказати інше значення, додайте у рядок vram:4 . gift:false - прибрати плашку подарунка. price:null - "Ціна за запитом".
var COND="Зовні 9.5/10, технічно 10/10";
var L=[
{id:122,b:"Dell",n:"Dell 15 Gaming",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"16 ГБ",disk:"SSD 128 ГБ + HDD 1 ТБ",scr:"15.6",price:25000,cond:"Зовні 10/10, технічно 10/10",photos:["images/122.jpg","images/122-2.jpg"]},
{id:097,b:"MSI",n:"MSI TITAN 18",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"24 ГБ",disk:"SSD 512 ГБ + HDD 1 ТБ",scr:"18.4",price:35000,cond:"Зовні 10/10, технічно 10/10",sold:"Продано",photos:["images/097.jpg","images/097-2.jpg","images/097-3.jpg","images/097-4.jpg","images/097-5.jpg"]},
{id:69,b:"MSI",n:"MSI Raider 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"16 ГБ",disk:"SSD 128 ГБ + HDD 500 ГБ",scr:"15.6",price:25000,cond:"Зовні 9.5/10, технічно 10/10",sold:"Відправлено",photos:["images/069.jpg","images/069-2.jpg","images/069-3.jpg","images/069-4.jpg","images/069-5.jpg"]},
{id:80,b:"MSI",n:"MSI Raider 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"SSD 256 ГБ",scr:"15.6",price:22500,cond:"Зовні 10/10, технічно 10/10",photos:["images/080.jpg","images/080-2.jpg","images/080-3.jpg"]},
{id:83,b:"MSI",n:"MSI Raider 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"SSD 256 ГБ",scr:"15.6",price:23000,cond:"Зовні 10/10, технічно 10/10",photos:["images/083.jpg"]},
{id:99,b:"MSI",n:"MSI Raider 17",cpu:"Intel Core i5, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"SSD 128 ГБ + HDD 500 ГБ",scr:"17.3",price:25000,cond:"Зовні 9.5/10, технічно 10/10",sold:"Продано",photos:["images/099.jpg","images/099-2.jpg","images/099-3.jpg","images/099-4.jpg","images/099-5.jpg","images/099-6.jpg"]},
{id:103,b:"Lenovo",n:"Lenovo Legion 17",cpu:"Intel Core i5, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"HDD 1 ТБ",scr:"17.3",price:22500,cond:"Зовні 9.5/10, технічно 10/10",sold:"Продано",photos:["images/103.jpg"]},
{id:121,b:"Lenovo",n:"Lenovo Gaming 15",cpu:"AMD, 8 ядер",gpu:"AMD Radeon Graphics",ram:"8 ГБ",disk:"SSD 256 ГБ",scr:"15.6",price:15000,cond:"Зовні 10/10, технічно 10/10",sold:"Продано",photos:["images/121.jpg","images/121-2.jpg"]},
{id:124,b:"Dell",n:"Dell 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"12 ГБ",disk:"SSD 256 ГБ + HDD 1 ТБ",scr:"15.6",price:25000,cond:"Зовні 9.5/10, технічно 10/10",sold:"Продано",photos:["images/124.jpg","images/124-2.jpg"]},
{id:126,b:"Asus",n:"Asus ROG",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"HDD 1 ТБ",scr:"15.6",price:22900,cond:"Зовні 9/10, технічно 10/10",sold:"Відправлено",photos:["images/126.jpg","images/126-2.jpg","images/126-3.jpg","images/126-4.jpg","images/126-5.jpg","images/126-6.jpg"]},
{id:132,b:"Asus",n:"Asus ROG 17",cpu:"Intel Core i7, 8 ядер",gpu:"AMD Radeon Graphics",ram:"8 ГБ",disk:"HDD 500 ГБ",scr:"17.3",price:20600,cond:"Зовні 9/10, технічно 10/10",photos:["images/132.jpg","images/132-2.jpg","images/132-3.jpg","images/132-4.jpg","images/132-5.jpg","images/132-6.jpg"]},
{id:133,b:"Asus",n:"Asus ROG 17",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"16 ГБ",disk:"SSD 256 ГБ + HDD 700 ГБ",scr:"17.3",price:28000,cond:"Зовні 9.5/10, технічно 10/10",sold:"Продано",photos:["images/133.jpg"]},
{id:135,b:"Asus",n:"Asus ROG 17",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"20 ГБ",disk:"SSD 192 ГБ + HDD 700 ГБ",scr:"17.3",price:25500,cond:"Зовні 9.5/10, технічно 10/10",sold:"Відправлено",photos:["images/135.jpg","images/135-2.jpg","images/135-3.jpg","images/135-4.jpg","images/135-5.jpg","images/135-6.jpg","images/135-7.jpg","images/135-8.jpg"]},
{id:136,b:"Asus",n:"Asus TUF Gaming 15",cpu:"Intel Core i5, 8 ядер",gpu:"Nvidia GeForce GTX",vram:8,ram:"8 ГБ",disk:"SSD 512 ГБ",scr:"15.6",price:28500,photos:["images/136.jpg","images/136-2.jpg","images/136-3.jpg","images/136-4.jpg","images/136-5.jpg","images/136-6.jpg"]},
{id:137,b:"Asus",n:"Asus VivoBook 15",cpu:"Intel Core i3, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"SSD 256 ГБ",scr:"15.6",price:20000,cond:"Зовні 9.5/10, технічно 10/10",sold:"Відправлено",photos:["images/137.jpg","images/137-2.jpg","images/137-3.jpg","images/137-4.jpg","images/137-5.jpg","images/137-6.jpg","images/137-7.jpg"]},
{id:108,b:"Asus",n:"Asus ROG 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"16 ГБ",disk:"SSD 512 ГБ",scr:"15.6",price:23000,cond:"Зовні 9.5/10, технічно 10/10",photos:["images/108.jpg"]},
{id:110,b:"Asus",n:"Asus ROG 15",cpu:"Intel Core i7, 8 ядер",gpu:"Nvidia GeForce GTX",ram:"8 ГБ",disk:"SSD 256 ГБ",scr:"15.6",price:20000,cond:"Зовні 9.5/10, технічно 10/10",photos:["images/110.jpg"]}
];
