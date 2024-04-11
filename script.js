document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.getElementById("calendar");
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  const festivalsContainer = document.getElementById("festivals");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    { days: 29, name: " कछला || Kachhala" },
    { days: 30, name: "थिंला || Thinla" },
    { days: 29, name: "पोहेला || Pohela" },
    { days: 30, name: "सिल्ला || Silla" },
    { days: 29, name: "चिल्ला || Chilla" },
    { days: 30, name: "चौला || Chaula" },
    { days: 29, name: "बछला || Bachhala" },
    { days: 29, name: "तछला || Tachhala" },
    { days: 30, name: "दिल्ला || Dilla" },
    { days: 30, name: "गुंला || Gunla" },
    { days: 29, name: "ञला || Yanla" },
    { days: 30, name: "कौला || Kaula" },
  ];

  const events = [
    { month: 1, date: 1, name: "Mha Puja New year 1144" },
    { month: 1, date: 2, name: "Kijapuja" },
    { month: 1, date: 3, name: "Swa Kokyageyu" },
    { month: 1, date: 5, name: "Kartik Nach" },
    { month: 1, date: 6, name: "Chatparva" },
    { month: 1, date: 11, name: "Haribodhani Ekadashi" },
    { month: 2, date: 13, name: "Christmas day" },
    { month: 2, date: 14, name: "Yomari punhi" },
    { month: 2, date: 20, name: "New year 2024" },
    { month: 2, date: 19, name: "Tamu lhoshar" },
    { month: 3, date: 1, name: "Tol Lhoshar" },
    { month: 3, date: 4, name: "Ghya Chaku Sahnu" },
    { month: 3, date: 19, name: "Shahid Diwas" },
    { month: 4, date: 1, name: "Sonam Lhosar" },
    { month: 4, date: 5, name: "Sreepanchami" },
    { month: 4, date: 10, name: "Prajatantra diwas" },
    { month: 4, date: 29, name: "MahaShivaratri" },
    { month: 5, date: 28, name: "Pachare" },
    { month: 5, date: 1, name: "Gyalpo Lhosar" },
    { month: 5, date: 14, name: "Holi punhi" },
    { month: 5, date: 29, name: "Ghodajatra" },
    { month: 6, date: 1, name: "Bisket Jatra" },
    { month: 6, date: 9, name: "Ram Nawami" },
    { month: 6, date: 23, name: "MajdurDiwas" },
    { month: 7, date: 15, name: "Budhha jayanti" },
    { month: 7, date: 20, name: "Ganatantra Diwas" },
    { month: 8, date: 22, name: "Dhan Diwas" },
    { month: 9, date: 15, name: "Guru purnima" },
    { month: 9, date: 29, name: "Ghatemugha" },
    { month: 10, date: 1, name: "Gunla Dharma Prarambha" },
    { month: 10, date: 5, name: "Nagpanchami" },
    { month: 10, date: 16, name: "Saparu" },
    { month: 10, date: 22, name: "Krishna Janmaastami" },
    { month: 10, date: 30, name: "Father's day" },
    { month: 11, date: 1, name: "Gunla Dharma Samapti" },
    { month: 11, date: 3, name: "Teej" },
    { month: 11, date: 4, name: "Ganesh Chauthi" },
    { month: 11, date: 5, name: "Rishi panchami" },
    { month: 11, date: 30, name: "Sohra Shraddha Samapti" },
    { month: 11, date: 14, name: "Indrajatra" },
    { month: 11, date: 15, name: "Yenha punhi" },
    { month: 11, date: 16, name: "Sambhidhan diwas" },
    { month: 11, date: 17, name: "Nanichaya" },
    { month: 12, date: 1, name: "Ghatasthapana" },
    { month: 12, date: 5, name: "Pachali Bhairav Jatra" },
    { month: 12, date: 8, name: "Fulpati" },
    { month: 12, date: 9, name: "Kuchi bhwae" },
    { month: 12, date: 10, name: "Bijaya Dashami" },
    { month: 12, date: 29, name: "Khichapuja" },
    { month: 12, date: 30, name: "Laxmipuja" },
  ];
  const Descriptions = [
    {
      name: "Mha Puja New year 1144",
      desc: "Being celebrated across the country today amidst various programs. The people of the Newar community have been celebrating the Nepal Sambat New Year's Day.",
    },
    {
      name: "Kijapuja",
      desc: "A specific festival that exclusively acknowledges and showcases the love between brother and sister.",
    },
    {
      name: "Swa Kokyageyu",
      desc: "Taking all the flowers from the deities that were previously offered to.",
    },
    {
      name: "Kartik Nach",
      desc: "Performed in the opulent Kartik Dabali, located in the enchanting Patan Durbar Square. Here, for a span of two to twenty-seven days, the tales of the Hindu god Vishnu come to life in all their vivid glory.",
    },
    {
      name: "Chatparva",
      desc: "Mata Aditi gave birth to Surya as a son on the sixth day of Kartika. Surya is also called Aditya because he is the son of Aditi. For this reason, Chhath Puja is celebrated as the birth anniversary of Surya, and the month of Kartika is considered a holy month throughout the year.",
    },
    {
      name: "Haribodhani Ekadashi",
      desc: "According to the Sanatan Dharma, Lord Vishnu first woke up four months after Ashadh Shukla Ekadashi. On this holy day, Lord Vishnu first heard the prayer of Tulsi and woke up from the effect of the same prayer. It is a symbolic marriage to depict the holy unification of Lord Vishnu and mother Lakshmi.",
    },
    {
      name: "Christmas day",
      desc: "An annual festival commemorating the birth of Jesus Christ, observed primarily on December 25.",
    },
    {
      name: "Yomari punhi",
      desc: "Yomari Punhi is a Newari festival marking the end of the rice harvest. It takes place in November/December during the full moon day of Thinlā, the second month in the lunar Nepal Era calendar.",
    },
    
    {
      name: "New year 2024",
      desc: "The time or day at which a new calendar year begins and the calendar's year count increments by one.",
    },
    {
      name: "Tamu lhoshar",
      desc: "A new year festival of Gurung people of Nepal.",
    },
    {
      name: "Tol Lhoshar",
      desc: "A festival celebrated especially by the community in the Himalayan region.",
    },
    {
      name: "Ghya Chaku Sahnu",
      desc: " The festival is marked by eating ghee and chaku that are said to be good for body heat. Others also enjoy yams, sweet potatoes, fried fish, and black and white sesame balls.",
    },
    {
      name: "Shahid Diwas",
      desc: "Nepali celebrates Martyrs' Day on 16th Magh to commemorate the sacrifice of different known and unknown martyrs who fought against the Rana regime and also to emulate the path that they have shown to the nation.",
    },
    {
      name: "Sonam Lhosar",
      desc: "A New Year's day festival of the Hyolmo and Tamang people of Nepal as well as Sikkim and Darjeeling regions of India.",
    },
    {
      name: "Sreepanchami",
      desc: "Or Shri Panchami or Basant Panchami, is a special day celebrated by worshiping goddesses Saraswati, the epitome of knowledge and music.",
    },
    {
      name: "Prajatantra diwas",
      desc: "National democracy day, this day holds a specific and significant value in the Nepali calendar/events.",
    },
    {
      name: "MahaShivaratri",
      desc: "A notable festival in Hinduism, marking a remembrance of 'overcoming darkness and ignorance' in life and the world.",
    },
    {
      name: "Pachare",
      desc: "Also known as Pāsā Charhe, is one of the greatest religious festivals of the year in Nepal Mandala.",
    },
    {
      name: "Gyalpo Lhosar",
      desc: "The auspicious celebration of Tibetan New Year. Tibet and other neighboring nations prepare for this day in their way, Lo means year and Shar means new so jointly it forms a New Year.",
    },
    {
      name: "Holi punhi",
      desc: " Holi, the most colorful festival of Hindus celebrated in Nepal.",
    },
    {
      name: "Ghodajatra",
      desc: "The demon used to create fear among the Kathmandu dwellers as it quenched its hunger by eating children and locals. After his death, people rejoiced by dancing on his body by riding horses.",
    },
    {
      name: "Bisket Jatra",
      desc: "Two snakes appeared in the thread-like structures through the nostrils of the princess and attacked the prince, upon which he killed the snake with his sword. When people saw him alive the next morning, they celebrated the day as Biska Jatra.",
    },
    {
      name: "Ram Nawami",
      desc: "This festival celebrates the birth of Lord Rama who is an incarnation of Lord Vishnu.",
    },
    {
      name: "MajdurDiwas",
      desc: "A public holiday in Nepal, known locally as Majdur Diwas.",
    },
    {
      name: "Budhha jayanti",
      desc: "Also known as Buddha Purnima in Nepal, it is a festival that celebrates the birth of Gautam Buddha. The festival is celebrated on the Baisakh Purnima.",
    },
    {
      name: "Ganatantra Diwas",
      desc: "Also called Ganatantra Diwas, it is a national holiday in Nepal commemorating the country's transition from monarchy to republic.",
    },
    {
      name: "Dhan Diwas",
      desc: "Farmers across the country celebrated National Paddy Day by eating Dahi-Chiura.",
    },
    {
      name: "Guru purnima",
      desc: "Serves as a reminder of the eternal importance of knowledge, learning, and the revered Gurus who selflessly share their wisdom with the world.",
    },
    {
      name: "Ghatemugha",
      desc: "As if hearing their prayers, a group of frogs came to the locality and then started croaking to irritate the demon. The demon ran after them and when the frogs jumped into a swamp, the demon followed and then drowned in the swamp itself. So, Gathamuga is celebrated as the day people got rid of the demon.",
    },
    {
      name: "Gunla Dharma Prarambha",
      desc: "The celebration of this festival is found to be more spiritual and contemplative in the Buddhist families of the community. Since Lord Buddha and his followers lived in the same place without traveling during the rainy season, this festival is also considered as a confluence of rain and knowledge. Especially in the Gunla festival celebrated by the Newar community, there is a tradition of going to see Lord Swayambhu in the morning.",
    },
    {
      name: "Nagpanchami",
      desc: "As per Hindu traditions, Nag Panchami holds great significance and is dedicated to the worship of snakes. They are considered the most powerful creatures and are worshipped as deities mainly by devotees from the Naga tribe.",
    },
    {
      name: "Saparu",
      desc: "Saparu/Gai Jatra is a festival of dancing, singing, mirth, and laughter. The festival of cow is celebrated in the Kathmandu Valley to commemorate the death of loved ones. As part of the festival, family members of the deceased of the past year send people, mostly children, dressed as cows to parade on the streets.",
    },
    {
      name: "Krishna Janmaastami",
      desc: "Lord Krishna's birth is celebrated as Janmashtami. Lord Krishna's devotees celebrate the day with great devotion and reverence. He is seen as a symbol of divinity, love, and righteousness.",
    },
    {
      name: "Father's day",
      desc: "A holiday honoring one's father or relevant father figure, as well as fatherhood, paternal bonds, and the influence of fathers in society.",
    },
    { name: "Gunla Dharma Samapti", desc: "End of Gunla." },
    {
      name: "Teej",
      desc: "Afestival in nepal where all the females fast for long life of their husband",
    },
    {
      name: "Ganesh Chauthi",
      desc: "A festival that pays homage to Lord Ganesh, the remover of obstacles, and celebrates the day of his birth.",
    },
    {
      name: "Rishi panchami",
      desc: "The day dedicated to all the sages of India. This day is considered to be one of the most auspicious days. Rishi Panchami is celebrated to honour the seven great sages.",
    },
    {
      name: "Sohra Shraddha Samapti",
      desc: "A period of sixteen lunar days in which Hindus worship and honour their ancestors by offering a ball of steamed rice called Pinda and Tarpan containing holy water, Kush, flowers, and seeds.",
    },
    {
      name: "Indrajatra",
      desc: "The eight-day long Indra Jatra festival falls in September and is one of the most exciting and revered festivals of the Newar community of the Kathmandu Valley.",
    },
    { name: "Yenha punhi", desc: "The 2nd day of Indrajatra." },
    {
      name: "Sambhidhan diwas",
      desc: "Asoj 3rd, the national constitution day of Nepal, the day to commemorate the promulgation of the Nepali constitution.",
    },
    {
      name: "Nanichaya",
      desc: "People pull the chariot pulled through the central section of Kilagal and is known as Nanichaya.",
    },
    {
      name: "Ghatasthapana",
      desc: "On this day, the Kalash is filled with holy water and is then sewn with barley seeds. Then the Kalash is put in the center of a rectangular sand block.",
    },
    {
      name: "Pachali Bhairav Jatra",
      desc: "The festival of Pachali Bhairav is celebrated in Kathmandu on Vijaya Dashami every twelve years.",
    },
    {
      name: "Fulpati",
      desc: "On the day of Fulpati, people gather different materials like banana stalks, jamara, belpatra (leaves of wood apple) and sugarcane sticks tied with red cloth along with kalash and welcome goddess Durga or Kali, the supreme deity who is worshipped during the festival.",
    },
    {
      name: "Kuchi bhwae",
      desc: "In Newari, kuchi means two manas while bhay means feast. On the day of Maha Ashtami, there is a custom of feasting on banana leaves. Kuchi Bhay has special importance in that community. To eat kuchi bhay, only 12 types of vegetable dishes are required and 12 pieces of choyla are also kept.",
    },
    {
      name: "Bijaya Dashami",
      desc: "Elders put this tika and jamara which is sown in the Ghatasthapana on the forehead of younger relatives to bless them with abundance in the coming years. Red also symbolizes the blood that ties the family and community together.",
    },
    {
      name: "Khichapuja",
      desc: "An annual Hindu festival originating from Nepal which falls on the second day of the festival of Tihar.",
    },
    {
      name: "Laxmipuja",
      desc: "This Puja is being held to honor Goddess Lakshmi to bring wealth and prosperity to the family in the future. All the family members on the day of puja dress up with new traditional clothes. According to Hindu Mythology, it is believed that Goddess Lakshmi will visit the cleanest house first.",
    },
  ];

  const year = ["   1144"];

  let currentMonthIndex = 2;
  let startDay = 5; // Initial start day for Month 1 (Tuesday)

  function renderCalendar() {
    festivalsContainer.innerHTML = "";
    const month = months[currentMonthIndex];

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const monthHeader = document.createElement("th");
    monthHeader.colSpan = 7;
    monthHeader.textContent = month.name + year;

    headerRow.appendChild(monthHeader);
    table.appendChild(headerRow);

    const daysRow = document.createElement("tr");

    // Day labels for the second row
    daysOfWeek.forEach((day) => {
      const dayHeader = document.createElement("th");
      dayHeader.textContent = day;
      daysRow.appendChild(dayHeader);
    });

    table.appendChild(daysRow);

    // Calculate the number of weeks needed
    const numWeeks = Math.ceil((month.days + startDay - 1) / 7) + 1;

    for (let weekIndex = 0; weekIndex < numWeeks; weekIndex++) {
      const weekRow = document.createElement("tr");

      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const dayCell = document.createElement("td");
        dayCell.classList.add("day");

        // Calculate the day number within the month
        const dayNumber = weekIndex * 7 + dayIndex + 1 - startDay;

        // Check if the day is a Saturday (dayIndex === 6)
        const isSaturday = dayIndex === 6;

        // Only display days within the month's range
        if (dayNumber > 0 && dayNumber <= month.days) {
          const eventsContainer = document.createElement("div");
          const eventsList = document.createElement("ul");

          // Check if there are events for this day
          const dayEvents = getEventsForDay(currentMonthIndex + 1, dayNumber); // Use month number
          if (dayEvents.length > 0) {
            dayEvents.forEach((event) => {
              const eventItem = document.createElement("li");
              eventItem.textContent = event.name;
              eventItem.style.color="red";
              eventsList.appendChild(eventItem);
            });

            eventsContainer.appendChild(eventsList);
          }

          dayCell.appendChild(document.createTextNode(dayNumber));
          
          dayCell.appendChild(eventsContainer);
          


          // Add click event listener to each day cell
          dayCell.addEventListener("click", function () {
            const selectedDayEvents = getEventsForDay(
              currentMonthIndex + 1,
              dayNumber
            );
            displayEvents(selectedDayEvents);
          });

          // Disable the "Previous" button on the first month
          prevButton.disabled = currentMonthIndex === 0;
          // Disable the "Next" button on the last month
          nextButton.disabled = currentMonthIndex === months.length - 1;

          if (currentMonthIndex === 2 && dayNumber === 10) {
            dayCell.style.backgroundColor = "red"; // Set background color to red
          }

          // If it's Saturday, mark it as a holiday with a yellow background
          if (isSaturday) {
            dayCell.style.backgroundColor = "#fa5050"; // Set background color to red
          }

          // Increase the font size of the date
          dayCell.style.fontSize = "20px"; // Adjust the font size as needed
          dayCell.style.fontWeight = "bold";

          // Set vertical alignment to top
          dayCell.style.verticalAlign = "top";
        } else {
          dayCell.textContent = ""; // Empty cell for days outside the month's range
        }

        weekRow.appendChild(dayCell);
      }

      table.appendChild(weekRow);
    }

    // Update the start day for the next month
    startDay = (startDay + month.days) % 7;
    if (startDay === 0) {
      startDay = 7; // Adjust to Sunday if it's 0
    }

    // Clear the calendar container before rendering the new month
    calendarContainer.innerHTML = "";
    calendarContainer.appendChild(table);

    renderGregorianCalendar();
  }

  function getEventsForDay(month, day) {
    return events.filter(
      (event) => event.month === month && event.date === day
    );
  }

  function displayEvents(selectedDayEvents) {
    festivalsContainer.innerHTML = "";

    if (selectedDayEvents.length > 0) {
      const eventsList = document.createElement("ul");

      selectedDayEvents.forEach((event) => {
        const eventItem = document.createElement("li");
        eventItem.textContent = event.name;

        eventItem.style.color="crimson";
        eventItem.style.fontFamily="cairo";

        // Check if there is a description for the event
        const eventDescription = Descriptions.find(
          (desc) => desc.name === event.name
        );
        if (eventDescription) {
          const descriptionParagraph = document.createElement("p");
          descriptionParagraph.textContent = eventDescription.desc;

          // Increase the font size of the description
          eventItem.style.fontSize = "20px";
          descriptionParagraph.style.fontSize = "20px"; // Adjust the font size as needed

          eventItem.appendChild(descriptionParagraph);
        }
        else {
          // Handle the case when there is no description
          const noDescriptionParagraph = document.createElement("p");
          noDescriptionParagraph.textContent = "No description available.";
  
          // You can customize the styling for the case with no description
          noDescriptionParagraph.style.fontSize = "16px"; // Adjust the font size as needed
          noDescriptionParagraph.style.color = "gray";
  
          eventItem.appendChild(noDescriptionParagraph);
        }

        eventsList.appendChild(eventItem);
      });

      festivalsContainer.appendChild(eventsList);

      // Adjust the font size of the festivals container
      festivalsContainer.style.fontSize = "18px"; // Change the font size as needed
      
    }
  }
  

  // Event listener for the "Next" button
  nextButton.addEventListener("click", function () {
    currentMonthIndex = (currentMonthIndex + 1) % months.length;
    renderCalendar();
  });

  prevButton.addEventListener("click", function () {
    currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;

    // Set the initial start day for each month
    startDay = getInitialStartDay(currentMonthIndex);

    renderCalendar();
  });

  // Function to get the initial start day for each month
  function getInitialStartDay(monthIndex) {
    // You can customize the initial start days for each month as needed
    const initialStartDays = [2, 3, 5, 6, 1, 2, 4, 5, 6, 2, 3, 4];
    return initialStartDays[monthIndex];
  }
  // Initial rendering
  renderCalendar();
});
