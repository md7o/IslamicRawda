import { categoriesItems } from "./cate_data";

const selectedCategories = [
  "الرحلات",
  "تربية",
  "العقيدة",
  "فقه",
  "سياسة شرعية",
  "دعوة",
  "تفسير",
  "نحو",
  "مقاصد",
  "ثقافة عامة",
];

export const headerData = [
  //   {
  //     headerTitle: "مؤلفات",
  //     content: categoriesItems
  //       .filter((category) => selectedCategories.includes(category.categoryTitle))
  //       .map((category) => ({
  //         title: category.categoryTitle,
  //         index: category.categoryContent.filter(
  //           (contentItem) => contentItem.title
  //         ),
  //       })),
  //   },
  //   {
  //     headerTitle: "رحلات",
  //     content: categoriesItems
  //       .filter((category) => category.categoryTitle === "الرحلات")
  //       .map((category) => ({
  //         title: category.categoryTitle,
  //         index: category.categoryContent.filter(
  //           (contentItem) => contentItem.title
  //         ),
  //       })),
  //   },
  {
    headerTitle: "شخصيات",
    content: [
      {
        title: "وفاة الشيخ مصطفى كامورا الياباني",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مصطفى مشهور - نشأ داعية ومات داعية",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "سيرة علم من أعلام المسلمين في إندونيسيا - الدكتور محمد رشيدي",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "وفاة الداعية الإسلامي الشيخ أحمد ديدات",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "وفاة رئيس الحزب الإسلامي في ماليزيا (فاضل محمد نور)",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مع الداعية الإسلامي الدكتور محمد ناصر",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مع أسد الجهاد الفليبيني: سلامت هاشم في عرينه",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مع عملاق الدعوة الإسلامية أبي الأعلى المودودي",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "فضيلة الشيخ الحاج محمد أمين ما إِنْ شِينْ",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
    ],
  },

  {
    headerTitle: "حوارات",
    content: [
      {
        title: "حوارات مع مسلمين جدد",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "حوارات مع غير مسلمين",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
    ],
  },
  {
    headerTitle: "مقالات",
    content: [
      {
        title: "مجموعة من المقالات العامة",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "الجهاد في سبيل الله",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مجموعة من المقالات حول الجهاد الفلسطيني",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
    ],
  },
  {
    headerTitle: "رسائل",
    content: [
      {
        title: "استعصاء دين الهداية والرحمة",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "التكفير والنفاق ومذاهب العلماء فيهما",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "كيف تقضي إجازتك",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "ما المخرج",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مفاصل الخلل في الأمة وطريقة علاجها",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مفتاح باب الريان",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "هل يطلق على أهل الكتاب صفة الكفر؟",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
    ],
  },
  {
    headerTitle: "قصائد",
    content: [
      {
        title: "طلاب فلسطين يهنئون زملاءهم بالعام الدراسي الجديد",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "رثاء الشيخ عبد العزيز بن باز رحمه الله",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "المنظار",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "غَرِّد جِهادا",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "أطفال فلسطين يهنئون بالعيد السعيد!",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "بنت الملوك!",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "خسارة الأمم بتركنا الجهاد والدعوة …! (1)",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: 'في القطار " 1 "',
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "أنشودة الطفل الفلسطيني",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "الله أكبر",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "صمود السودان لِزُمَر الشيطان",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "يـا أمتي",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "تبدل الأحوال ! (1)",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "رثاء الشيخ العلامة أبي الحسن الندوي رحمه الله",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "حبيبتي(1)",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title:
          "جَلَّ المصابُ ( رثاء لفضيلة الشيخ عمر محمد فلاتة رحمه الله (1) )",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "النبت الذابل! ( 1 )",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "الرؤوس الجاهلة",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "يوم التروية",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "أيام رمضان",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "يا أمتي!",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "الحبيبة",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "مداعبة للدكتور عبدالله عشميق",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "نشيد مصر قالت يا إِلَهِي",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "ميادين ثوار اليمن",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
      {
        title: "ملك الملوك المحبوب",
        introduction:
          "This is an introduction to the book 'مقدمة سلسلة في المشارق والمغارب'.",
        index: [
          {
            title: "المقدمة",
            details: "Introduction to the series and its purpose.",
          },
          {
            title: "الغاية من الأسفار",
            details:
              "The objective and goals of traveling as discussed in the series.",
          },
          {
            title: "منهجي في تسجيل ما تضمنته هذه السلسلة",
            details: "Methodology used in documenting the series content.",
          },
        ],
      },
    ],
  },

  {
    headerTitle: "المنتدى",
  },
];
