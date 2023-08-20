// شیء JSON حاوی یادداشت‌ها
  var notes = {
      "1": "الان که دارم این متن رو مینویسم دقیقا 30 روز به تولدت مونده، ساعت 08:43 دقیقه صبحه و من دارم اولین يادداشت رو مینویسم، احساسی که الان دارم احساس خوبی نیست  غمگینم و احساس پوچی میکنم، از ته قلبم آرزو میکنم هیچوقت دچار این احساسات نشی و هر لحظه زندگیت شاد باشه،با تمام وجودم و تا ابد دوستت دارم I",
      "2": "امروز روز خوبی بود، اتفاقاتی افتاد که ممکنه کل زندگیم رو تغییر بده، و باعث پیشرفت کل زندگیم بشه، دوست داشتم امروز کنارم بودی و درباره تک تک اتفاقات باهات صحبت می‌کردم و میخندیدیم، امیدوارم هر روزت پر از شادی و اتفاقات خوب باشه L", 
      "3": "امروز بلاخره موفق شدم خودم رو اثبات کنم و به همه بفهمونم که میتونم، من میتونم موفق بشم، میتونم پیشرفت کنم، کسی نمیتونه جلوم رو بگیره، امیدوارم هر روزت پر از موفقیت باشه o",
      "4": "امروز، تنهام، پوچ، خالی، وای نمیتونی درک کنی چقدر حالم بده، احساس میکنم از 50 جا تحت فشارم و کسی نیست کمکم کنه، امیدوارم هرگز به همچین حس هایی بر نخوری و شاد باشی v", 
      "5": "25 روز به تولدت مونده، تصمیم گرفتم پروژه رو گسترش بدم و قسمت هایی رو بهش اضافه کنم، به نظرم یه تبریک ساده و یه دفترچه خاطرات کسل کننده نمیتونه مناسبت باشه، باید خیلی خاص تر باشه، چون... تو خاصی e",
      "6": "امروز یکی از بزرگترین امتحانات زندگیم رو دادم، میتونه خیلی توی زندگیم تاثیر داشته باشه، به اندازه که باعث بشه شغل داعمیم رو انتخاب کنم، وای خیلی برای نتایجش استرس دارم، میدونم موفق میشم ولی خوب... Y", 
      "7": "یه روز عادی و کسل کننده، امروز هیچ کاری نبود که انجام بدم، کل تایم رو داشتم فیلم میدیدم و ات و آشغال میخوردم یا آهنگ گوش میکردم، البته 90 درصد روز هام اینجوریه همینقدر مزخرف، دوست داشتم بتونم باهات صحبت کنم، وای چقدر دلم برات تنگ شده،کاش کنارم بودی، وای چی دارم میگم ولش کن o",
      "8": "امروز چندتا کتاب خریدم، ولی حسش نیست بخونمشون، اصلا چرا خریدمشون؟ نمیدونم، ولی امیدوارم کاربردی باشن u", 
      "9": "باید بگم دوستت دارم، نمیدونم چرا، چطوری شد،ولی میدونم دوستت دارم، بینهایت دوستت دارم، دوست داشتم کنارت بودم و اینو آروم جوری که نفس هام به گوشت بخوره توی گوشت زمزمه کنم H",
      "10": "امروز دقيقا 20 روز به تولدت مونده، دوست داشتم کار های خیلی بزرگ تری برات بکنم که بتونم فقط چند دقیقه از زندگیت رو شاد کنم، امیدوارم این پروژه بتونه حداقل برای چند دقیقه شادت کنه a",
      "11": "امروز اتفاقات جذابی برام رخ داد، تونستم نتیجه تلاش هام رو ببینم، دوست داشتم میشد باهات صحبت کرد و کل اینارو بهت توضیح میدادم و کلی پز خودم رو میدادم ولی خوب پیشم نیستی p",
      "12": "امروز باز هم مثل روز های عادیم بیکارم, ای کاش میشد تایمم رو با تو بگزرونم، ولی خوب فیلم دیدن و آهنگ گوش کردنم بد نیست p", 
      "13": "چیزی تا تولدت نمونده، لحظه شماری میکنم که تولدت بشه و اینو برات بفرستم، دوست دارم از الان تا روز تولدت شاد شاد شاد باشی و روز های رعد تولدت شاد تر و شاد تر بشی y",
      "14": "امشب تونستم یه پروژه بگیرم، اگر بتونم درست انجامش بدم، خیلی عالی میشه ولی خوب مجبورم چندین روز پروژه تولد رو عقب بندازم، شایدم مجبور بشم به سری قسمت هاش رو انجام ندم B", 
      "15": "امشب یه شام خیلی خوب خوردم و دارم میترکم خیلی بمب بود، جات خالی، راستی فقط 15 روز مونده به تولدت، به زودی این میرسه دستت و باباش خوسحالم i",
      "16": "راستش امروز تصمیقم گرفتم دیگه این تقویم رو ننویسم چون... اصلا چرا باید بیای متن های عجیب غریب و بی کاربرد منو بخونی، حتی مطمئنم نمیخونیشون، ولی خوب بهرحال اگه تا اینجا خوندی باید بهت بگم که بینهایت دوستت دارم، هر سال تولدت تا روزی که زندم میام و تولدت رو تبریک میگم، به امید بهترین ها برات، دوستت دارم r", 
      "17": "none",
      "18": "none", 
      "19": "none",
      "20": "none",
      "21": "none",
      "22": "none", 
      "23": "none",
      "24": "none", 
      "25": "none",
      "26": "none",
      "27": "none",
      "28": "none", 
      "29": "none",
      "30": "تولدت مبارک، امیدارم امسال بهترین سال زندگیت باشه",
      "31": "none",
       };

  // تابع برای نمایش یادداشت‌ها
  function showNotes(day) {
      var noteBox = document.getElementById("note-box");
      noteBox.innerHTML = notes[day] || "";
  }

  // برای هر عنصر دارای کلاس "number"، رویداد کلیک را اضافه کنید
  var numbers = document.getElementsByClassName("number");
  for (var i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener("click", function() {
          var day = this.innerHTML;
          showNotes(day);
      });
  }
 