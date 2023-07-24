import { QueryInterface } from "sequelize";

const itemsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          id: "670594aa-48fb-4766-9009-59aebca91891",
          title: "Funko Pop Spider Man",
          description:
            "The Marvel Sinister Six series creates a whole new stage in your collection and is available exclusively here.The Funko Pop! Deluxe Sinister Six Deluxe series is made up of 7 new and unique figures, which have bases that come together to form a larger display.Collect all of the Marvel Sinister Six Deluxe Pop! figures to see the complete 'picture' of your collection, ending with the Deluxe Pop! Spider-Man. The vinyl figure stands approximately 4.5 inches tall and comes in a showcase box.",
          url: "https://m.media-amazon.com/images/I/5103EdSMB6L._AC_SL1300_.jpg",
          price: "17",
          quantity: "27",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "8f05bc8c-7f01-4425-98d0-fd7cb4b06bcc",
          title: "Mermaid Barbie",
          description:
            "Imaginations can dive into storytelling with the Barbie Dreamtopia Twinkle Lights mermaid doll with a magical light-up feature! Dip this beautiful Barbie mermaid doll in water to watch her pearly tail twinkle with one of four colorful light shows. Barbie Dreamtopia Twinkle Lights mermaid doll makes a splash in the bathtub or pool, but kids can also take the fun on land: press the star-shaped button on Barbie doll's bodice to enjoy the waterless light show. Rainbow fins, pink-striped hair and a princess tiara complete Barbie doll's colorful mermaid look. Perfect for bath time or water play (parental supervision required), the Barbie Dreamtopia Twinkle Lights mermaid doll makes a great gift for children ages 3 to 7. The doll cannot swim or stand alone. Colors and decorations may vary.",
          url: "https://target.scene7.com/is/image/Target/GUEST_54ff16e2-fb13-49da-a97c-e0d78b42c53b?wid=488&hei=488&fmt=pjpeg",
          price: "13",
          quantity: "112",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "3311be90-b1da-4a1d-989c-bb8abc98c6fb",
          title: "Apple iPhone 8",
          description:
            "The iPhone 8 is Apple's first smartphone made exclusively with durable glass on the front and back, designed to withstand splashes of dust and water. It is powered by the 64-bit 'Apple A11 Bionic' processor and has two internal storage available: 64 GB or 256 GB of flash storage. It features a 4.7-inch widescreen IPS multi-touch ('Retina HD') display and dual cameras: a 12-megapixel 4K rear camera with optical image stabilization and a 7-megapixel 'FaceTime HD' front-facing camera supporting 1080p video.",
          url: "https://m.media-amazon.com/images/I/71aOr1CuM1L._AC_SL1500_.jpg",
          price: "154",
          quantity: "13",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "50c14af5-1a7c-4d62-99f0-7880fbc7575d",
          title: "Nate de Fossil watch",
          description:
            "From classic chronographs to the newest smartwatches, we have the watch styles you love. The best part is that our wide selection of watches comes in enough styles, colors and designs to keep your style fresh and fun for years to come. Whether you're looking for an everyday watch, something for a special occasion or a gift for your loved ones, you'll find it here. We have the leather, stainless steel, mesh and silicone strap watches for the material that suits you best. Designed for weekend warriors, Nate's striking construction and on-the-go functionality play with a relaxed yet rugged style From a matte tinted dial to brushed jet steel, Nate gives the all-black trend a new depth Wear it to dress up your favorite pair of denim and a crisp white tee. This Nate watch also features a chronograph movement on a stainless steel bracelet.",
          url: "https://m.media-amazon.com/images/I/718AVhhc1GL._AC_UL1500_.jpg ",
          price: "80",
          quantity: "42",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
        },
      ],
      {},
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Items", {});
  },
};

export default itemsSeed;
