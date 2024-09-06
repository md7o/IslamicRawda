import Header from "../../components/widget/Header";

const SiteOwnerId = () => {
  const biography = [
    "من مواليد منطقة (عبس)، شمال اليمن، سنة 1356هـ",
    "هاجر إلى المملكة العربية السعودية سنة 1374هـ لطلب العلم، أكمل المرحلة الثانوية في قرية سامطة بمنطقة جيزان سنة 1382هـ",
    "وفي نفس السنة التحق بالجامعة الإسلامية بالمدينة المنورة وتخرج من كلية الشريعة وكان من طلاب الدفعة الثانية في الجامعة ـ سنة 1485هـ",
    "عين بعد تخرجه مدرساً في المرحلتين: المتوسطة والثانوية التابعتين للجامعة الإسلامية",
    "قام بالإشراف على شؤون الطلاب في الجامعة لمدة عشر سنوات تقريباً مع قيامه بالتدريس",
    "ثم قام بتدريس مادة العقيدة في كلية القرآن الكريم عندما أنشئت سنة 1395هـ كما قام بالتدريس في كلية الشريعة في الفترة المسائية",
    "ومن سنة 1396هـ إلى سنة 1402هـ كان عميداً لكلية اللغة العربية في نفس الجامعة",
    "نال شهادة الماجستير من كلية الشريعة والقانون سنة 1394هـ ومن أساتذته الأزهريين: الأستاذ الدكتور عبد الغني عبد الخالق والأستاذ الدكتور محمد شعبان",
    "ونال شهادة الدكتوراه من كلية الشريعة في جامعة الإمام محمد بن سعود الإسلامية في الرياض، سنة 1402هـ أشرف على الرسالة فضيلة الشيخ مناع بن خليل القطان",
    "من مشايخه في الجامعة الإسلامية أصحاب الفضيلة: الشيخ المفسر محمد الأمين الشنقيطي، صاحب >أضواء البيان في إيضاح القرآن بالقرآن< والشيخ المحدث محمد ناصر الدين الألباني، والشيخ محمد المختار الشنقيطي، والشيخ عبد المحسن العباد، والشيخ عطية بن محمد سالم، وغيرهم",
    "تتلمذ على سماحة الشيخ عبد العزيز بن عبد الله بن باز في المسجد النبوي من أول قدومه للجامعة سنة 1382هـ إلى أن انتقل سماحة الشيخ إلى وظيفته الأخيرة في الرياض 1395هـ",
    "ثم قام بالتدريس في قسم الدراسات العليا بالجامعة الإسلامية، مع الإشراف على الرسائل العلمية ومناقشتها وكان غالبها رسائل دكتوراه",
    "كما قام برئاسة شعبة الفقه في نفس القسم ما يقارب ست سنوات وكذا رئاسة شعبة الدعوة لمدة سنتين، ثم طلب إعفاءه من الأمور الإدارية ليتفرغ للتدريس",
    "شارك في عدة مؤتمرات وندوات في الجامعة الإسلامية وفي مؤسسات أخرى داخل المملكة وخارجها، كما اشترك في لجان دعوية وإدارية ومالية في الجامعة",
    "ثم قام بعدة رحلات عالمية وقد تضمنتها سلسلة (في المشارق والمغارب) التي طبعت مؤخرا في عشرين مجلدا",
    {
      text: "وله موقع على الشبكة العالمية للمعلومات (الانترنت) بعنوان: >موقع الروضة الإسلامي< وهو على هذا الرابط: ",
      link: "http://al-rawdah.net",
    },
  ];

  const works = [
    "الجهاد في سبيل الله ـ حقيقته وغايته (رسالة دكتوراه) طبع مرتين، ويقع في مجلدين كبيرين، وقد راجعه وأجرى تعديلات طفيفة على بعض موضوعاته وزيادات، وهو معد للطبعة الثالثة، ورتبه في أربعة أجزاء",
    "الكفاءة الإدارية في السياسة الشرعية، نفد وقد راجعه ونقحه وزاد فيه زيادات وهو جاهز للطبع",
    "الشورى (طبع مرتين) وتمت الإضافة عليه وهو معد للطبعة الثالثة",
    "دور المسجد في التربية، طبع مرتين.",
    "أثر التربية الإسلامية في أمن المجتمع الإسلامي، وقد راجعه المؤلف، وأضاف بعض الزيادات، ورتبه في ثلاثة أجزاء",
    "الحدود والسلطان.",
    "طل الربوة، طبع مراراً، وقد راجعه المؤلف وأضاف إليه بعض الموضوعات",
    "الدعوة إلى الإسلام في أوروبا، وهو مختصر من الرحلات الأوربية",
    "حوارات مع مسلمين أوربيين، وهو مختصر من الرحلات الأوربية.",
    "حوارات مع أوربيين غير مسلمين، وهو مختصر من الرحلات الأوربية",
    "جوهرة الإسلام (في التربية، نظم أكثر من 1300 بيت تقريباً، طبع أكثر من مرة، وهو قيد المراجعة لطبعات جديدة)",
    "المسؤولية في الإسلام، طبع مراراً. وقد راجعه المؤلف وأضاف إليه بعض الموضوعات، وهو معد للطبع",
    "الردة عن الإسلام وخطرها على العالم الإسلامي، طبع مراراً، وقد راجعة، واقتصر على أهم مواضيعه، وهو حكم قتل المرتد وهو معد للطبع",
    "الإسلام وضرورات الحياة، طبع مرتين. وقد راجعه المؤلف وفيه بعض الزيادات وأعده للطبعة الثالثة",
    "حكم زواج المسلم بالكتابية. تمت مراجعته وهو معد للطبعة الثانية",
    "هتاف العزة والجهاد (شعر).",
    "وقاية المجتمع من تعاطي المسكرات والمخدرات، طبعته الجامعة الإسلامية في المدينة المنورة، وهو معد للطبعة الثانية",
    "سبب الجريمة، نفد، وقد راجعه المؤلف وزاد فيه بعض الموضوعات، وهو معد للطبعة الثانية، بعنوان: قاعدة في سبب الجريمة والوقاية منها",
    "معارج الصعود إلى تفسير سورة هود (كتبته عن شيخي محمد الأمين الشنقيطي، رحمه الله في قاعة الدرس بكلية الشريعة، ثم رتبته، وقد قدم له أحد أبناء الشيخ، نفد)",
    "تفسير سورة النور (كسابقه). والكتابان معدان للطبعة الثانية",
    "السباق إلى العقول، طبع في بيروت، دار ابن حزم في أربع أجزاء",
    "سلسلة في المشارق والمغارب (وهي المذكرات التي دونها في رحلاته لبلدان العالم) وقد بلغت عشرين مجلداً.. وقد تمت طبعتها الأولى، وتتولى نشرها مكتبة دار الأندلس الخضراء في جدة",
    "الإيمان هو الأساس، وهو معد للطبعة الثانية",
    "غيث الديمة شرح الدرة اليتيمة، في النحو، طبع",
    "كتبٌ ورسائل لم يتم طبعها:",
    "أثر تطبيق الشريعة الإسلامية في صلاح الأمة، جمعت بعض مواده",
    "التكفير والنفاق ومذاهب العلماء فيهما. وهو تحت الطبع",
    "الإخلاص وما يعين المسلم عليه. وهو تحت الطبع",
    "استعصاء دين الهداية والرحمة. وهو تحت الطبع",
    "الواعظ الأكبر والزاجر الأعظم. وهو تحت الطبع",
    "رحلتي مع الشيخ [أي الشيخ ابن باز وهو معد للطبع]",
    "إجابات على أسئلة منتدى السقيفة",
  ];

  return (
    <div>
      <Header />

      <div className="text-right bg-darkColor h-full w-full space-y-5 leading-[1.5] md:w-3/4 mx-auto rounded-3xl xl:px-44 py-14 mt-16">
        <h1 className="text-white text-3xl pb-10">كلمة حول الموقع</h1>
        <ul className="list-decimal list-inside">
          {biography.map((item, index) => (
            <li
              key={index}
              className="text-xl font-medium text-white leading-[2]"
            >
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  {item.text}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {item.link}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
        <p className="text-white text-2xl font-bold pt-10">:مؤلفاته</p>
        <p className="text-white text-xl pb-10">
          أنجز عدداً من المؤلفات في موضوعات متنوعة بعضها قد طُبع وبعضها لم
          يُطبع، كما أن لديه موضوعات أخرى يريد الكتابة فيها، بعضها قد جمع
          مادتها، لعل الله يسهل له إنجازها جميعاً
        </p>
        <p className="text-red-300 text-2xl font-bold pt-10">:الكتب المطبوعة</p>
        <ul className="list-decimal list-inside">
          {works.map((work, index) => (
            <li key={index} className="text-xl text-white leading-[2]">
              {work}
            </li>
          ))}
        </ul>
        <p className="text-white text-xl pb-10">
          .وللمؤلف مقالات وأبحاث أخرى شارك ببعضها في منتديات الشبكة العالمية
          (الانترنت)
        </p>

        <div className="lg:flex justify-center items-center text-center gap-5 pt-20 pb-5 ">
          <p className="text-xl text-white font-bold lg:my-0 mb-5">
            عداد الصفحات اليومي: 2839
          </p>
          <p className="text-xl text-white font-bold">
            عداد الصفحات العام: 15909393
          </p>
        </div>
      </div>
      <p className="text-xl text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </div>
  );
};

export default SiteOwnerId;
