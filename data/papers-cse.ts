export type PaperLink = { label: string; href: string };
export type SubjectPapers = { name: string; papers: PaperLink[] };
export type SemesterPapers = { subjects: SubjectPapers[] };

const SEM_KEYS = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8"] as const;

export const QUESTION_CSE: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Electrical and Electronics Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1RtnHIFeZhLC-e4fO4JICfRpsEGc7iJeM/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1U7QXUI_44AQkE1b-iutIazndi7ttjY6d/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/13We61nKk8eQnC2SuYr43o1fiwOUbqi5d/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1mPQmH8ZUOBZD5PP3mE7QQ1esxlE8qLZN/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1RtHQm9_3RJRgfwi-U6Ze70XeW68RNjqB/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Edb2fRqMb-RVbYBrMIzjnaAnEc2DasJt/view?usp=sharing" },
        ],
      },
      {
        name: "Physics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1UVf9jO69CciyTio6_pql4y7ENliO1g5l/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1S26XT4JMS8kXSbP6jN4xhTSIYZhvahFX/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1EefNlDQU7FgGKS8F5xhBbtjGXRRg2mYG/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_ncTtdFoAYhCqd_hGh11xf1GRmw4ODF6/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1RzQ5m8Htt1UcTkRgDg2sb1UaFndgcgjm/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Graphics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1wBMgsT-DKFXw4cnwAYyYJX4Z3uhgzZj-/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1qhiLf9rMFJF2vuLhyS_9i7huvW4okglk/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WEPaXYe7OQP3n8DEXsAGyNLarDVH0nHS/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-DZSBfV8U5BzSUHZXK4iUAi_ka-zAY7Z/view?usp=sharing" },
        ]
      },
      {
        name: "Chemistry", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FPQ-AVntOO790Op17Owg6scRBg4OE73J/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qJOYWQMumBZRmutG99vKnt4JJXj9XSE2/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-CzR5yC4qAa-IRTkBiacd3xoj_4g8Hqs/view?usp=sharing" },
        ]
      },
      {
        name: "Foundations of Computing", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1qlZwoigDbvBrV4lj_l36xfH8meBwJ5in/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WVkFBwzn9xO5UFE9MJyNYcyOwMJp-qtD/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-ImbEEJm29fFypJYUFRu2-1L2dE31GdP/view?usp=sharing" },
        ]
      },
      {
        name: "Programming in C", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FNFVM2H5XD0ndWoqx8XhrW_GEIbzxMpH/view?usp=sharing" },
          { label: "Series 2 B1", href: "https://drive.google.com/file/d/1qEURVbDdLyJ9wt5evMr62vhjrEY0NYmr/view?usp=sharing" },
          { label: "Series 2 B2", href: "https://drive.google.com/file/d/1qEkdMfRIpQbQNKKo5CSbcb3-fl1l4XR_/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-2hmU_fwbScTJ9gzbZSZ7Hq2O9fdWJ05/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-B1-p_Eao9xtWsCzgxdNfjLAyYSUXN2J/view?usp=sharing" },
        ]
      },
      {
        name: "Discrete Mathematics (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FPbXGqNW0KX2434tYx2OpKt0rM9QAK5j/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qGqvaiv366VinBycnDLmrJ8pSkg1jzPy/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-Kw9XnHC9wajYp9TDIlazz0apdAotYGp/view?usp=sharing" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1zXx6Wy1uL3zfmRFTgK-aRyxzNmWpLXpq/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1IuSsMvwzQ3kq7w4sSTAIM_9cYZi50wP4/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/14xl83L5V6xQcljjVPXRFNWuhVgNQdkOy/view?usp=sharing" },
        ]
      },
      {
        name: "Object Oriented Programming", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1LZ97sNHphGeYMqhXA9WaOoWnkACtWn-W/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dQdUf1vTgCtxTwaAY5Xu1wi3Vpgmiegk/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/17xDBRo_3tcMbcuM32enQukJvSZKELKNs/view?usp=sharing" },
        ]
      },
      {
        name: "Theory of Computation", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Ran-fcCtLnAJ1f9hEK1DiMvk_RdSKDbm/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Oy1H3oRsBLrLwQtGq5R8yq64hewrVPWU/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1HckSOG8xP2k1slKFuGhUPYTyFFklDJPF/view?usp=sharing" },
        ]
      },
      {
        name: "Digital Electronics and Logic Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/11el-CklnYJzZ3SfP35OOkiCcT-jA8rux/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1pyThRcVEnGWDVZXiieMUfn56acglgGDN/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/14gB-1JWDsIvJ_rtcyNO-w7WzthqZlM4g/view?usp=sharing" },
        ]
      },
      {
        name: "Data Structures and Algorithms", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1vlI9e1wvLNZj7Rlns5_rRq5TMOoLk-wv/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1YhtwhEZNm_e7XDxo61TMSWmL3H4f_pcV/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1Mtz70aRVde1PAaFRnMt_swbXKlj_d629/view?usp=sharing" },
        ]
      },
      {
        name: "Economics for Engineers", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/11NjyXfevZKkKO5dx6bLqrez3CTuViNK9/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1kspAMIeaA4Codgkc-zZ-hEGcL-DNK5OS/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/10Mcv-O8Lp2rFcFLUg0Da8beu6nmaP_x9/view?usp=sharing" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1KZ9MkDN9ulZBUKOWxn07FxXYuBra2qJL/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1D1QYUx1QRFT3VtZKJS2YR0wdo1fylIeU/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Operating Systems", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jl_VQeMiz6qkPJ_BgDCzx2WinDHZXntk/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1VTUg6SLjamlgv5RIjiTmHYJckAJashlc/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Computer Organization & Architecture", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/14MrJNKZSVJ5Kp6_FcEEMwmGpfm-yBd7e/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1UEVRUwd-tHfqXK6Wnc4lCtWYvx0Hwcqn/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Database Management Systems", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1fuwUSZqCF9AMwcAkAABTe9FiszTj0t9v/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1vbi_WqAKyNut81_FsddsnSgle1iXNOdl/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Pattern Recognition", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hrBGOpg_zBaq-Vn985zaUy5fRuK2c8mL/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/153JGgbkYor8AMWdRWMAd59SQipt_BV8A/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Software Engineering", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/11NjyXfevZKkKO5dx6bLqrez3CTuViNK9/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1kspAMIeaA4Codgkc-zZ-hEGcL-DNK5OS/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Advanced Data Structures", papers: [
          { label: "Series (Coming Soon)", href: "" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
    ],
  },
  sem5: {
    subjects: [{ name: "Coming Soon", papers: [] }],
  },
  sem6: {
    subjects: [{ name: "Coming Soon", papers: [] }],
  },
  sem7: {
    subjects: [{ name: "Coming Soon", papers: [] }],
  },
  sem8: {
    subjects: [{ name: "Coming Soon", papers: [] }],
  },
};

export const QUESTION_ECE: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Electrical and Electronics Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1OGH6K_qbmpdvpvk5LK0w39bg590_qThu/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1p-adaHeQKWMQM9vYv0krrbi_8COABHl_/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1jRUWVVJXD0HEe7XFaiRoMIxr7JntHsDv/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Physics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jr1ZljBVjLiUMRzodjPY4xBzqLjsYaN7/view?usp=sharing" },
          { label: "Series 2 (Coming Soon)", href: "" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1K2GPV8XuBmio8XZnXYUKeSBv4vTQXBQC/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ruSnBmc51BOh9dcZzRTOZ1didyBc7rq7/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Gm8wy63qmCOP1MnhFcuAhExLjgHDxM0P/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Graphics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/14V-8oI1zdssG-1TaLw4Ci4PrRy5M0AVA/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1t9CN6Sdfc7oA5VLd5DAy_gMIYR2ym9Ik/view?usp=sharing" },
        ]
      },
      {
        name: "Chemistry", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FPQ-AVntOO790Op17Owg6scRBg4OE73J/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qJOYWQMumBZRmutG99vKnt4JJXj9XSE2/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Foundations of Computing", papers: [
          { label: "Series 2", href: "https://drive.google.com/file/d/1WVkFBwzn9xO5UFE9MJyNYcyOwMJp-qtD/view?usp=sharing" },
          { label: "Series 1", href: "https://drive.google.com/file/d/1qlZwoigDbvBrV4lj_l36xfH8meBwJ5in/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Programming in C", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15vt30ZXrLGDfCtCoXhso0Xmlbo0S_V9d/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15wlfzogU_gifC1g8Rv-7fIocG0Q1bRjh/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1XnR7JTLRTV4uYXrC4FplfyJuxKFx4L99/view?usp=sharing" },
        ]
      },
      {
        name: "Network Theory (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1X4wyk36aAfG7I0mrriTHX4YrPVw_Qq9q/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WenO_-FdfZ4HaVt8UpMIzpgaQdhfsdg_/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Solid State Devices", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1RmKxx1odOJF6aHWC_fOfxazSEawDz3RR/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XHkr13SZ5QPKVSNCi4I-Q5gQRbdOB5Fb/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1oJJYvdc75HyeQWtlTZYEDa5e_ntViOLg/view?usp=sharing" },
        ]
      },
      {
        name: "Analog Circuits", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1xzd3TWTOjkv5ZdXvBGukTf5BmHfu-zhL/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1LVKvVL28nP3CpYFPtT0cOKltfu7b6390/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "" },
        ]
      },
      {
        name: "Logic Circuit Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1OJeRm5gVVo2Ny0dn-cey-iz2XMKxxucb/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1CWem2sDdNg1Ll1O2LIWLdtUNlMJy6zz_/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1GO1BWhjOSCMflEFY4R9khKoFYvy516g7/view?usp=sharing" },
        ]
      },
      {
        name: "AI & DS", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/124HRpeKx_DL48BfeI8pYtz-jjJHcxTAC/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/13z03bcc-C-ipy09D7UDTKhGNSSyv8Fy5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Linear Integrated Circuits",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1lOfbzcwxr9f1qu1aTZJPTICiq9XcThxl/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1j9XB9e2tkoX9tkIwwjC3shHdw5_eCvs_/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Microcontrollers",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1v0o76LmH4NSKcyL91uTFMwGSHPsfn4LF/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Ds3cE_2hgnWLDo8sSZKbSQ_22NXHCHVP/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Signals and Systems",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1XvtKdayK17gaK-FIM3WtzVf6dd1rXcNB/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1RJO-fjHz-AWqVykb9fyTzSyemDX-h4V-/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Economics for Engineers",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1V3_CAqHhRdet7ARx0wMuMjMlerogA6Xp/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1eQc-ycz5VYNuTQI8TnUDW5YESGqnGfoV/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Digital Systems and VLSI Design",
        papers: [
          { label: "Series", href: "https://drive.google.com/file/d/19zseMpucKRN1-6ydwgOXleVLqtHRh7e5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
    ],
  },

  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_EEE: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Electrical and Electronics Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1EOb1p7WHT4OKp6L_TF00Uq9HC8iIyH_l/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Physics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jr1ZljBVjLiUMRzodjPY4xBzqLjsYaN7/view?usp=sharing" },
          { label: "Series 2 (Coming Soon)", href: "" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1K2GPV8XuBmio8XZnXYUKeSBv4vTQXBQC/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ruSnBmc51BOh9dcZzRTOZ1didyBc7rq7/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Gm8wy63qmCOP1MnhFcuAhExLjgHDxM0P/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Graphics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/14V-8oI1zdssG-1TaLw4Ci4PrRy5M0AVA/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1t9CN6Sdfc7oA5VLd5DAy_gMIYR2ym9Ik/view?usp=sharing" },
        ]
      },
      {
        name: "Chemistry", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FPQ-AVntOO790Op17Owg6scRBg4OE73J/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qJOYWQMumBZRmutG99vKnt4JJXj9XSE2/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Programming in C", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15vt30ZXrLGDfCtCoXhso0Xmlbo0S_V9d/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15wlfzogU_gifC1g8Rv-7fIocG0Q1bRjh/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Mechanics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1WqGkgOnbC9ip2S-YtTmk41BXSM0JO6Cr/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WfcWW3ASRqMHFhMOhUAuGl6eZQJJvn1Y/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1XnR7JTLRTV4uYXrC4FplfyJuxKFx4L99/view?usp=sharing" },
        ]
      },
      {
        name: "Measurements and Instrumentations (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Wr93xe_bm1z7BWP5Q1ylQzJTn1HFYqQP/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WwvylWVPkmR3F_ibDpZWOtb5vy7yScjW/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Circuits and Networks", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1DESe0CgGYg52M0re6BHDdQf_3AEK9dAh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1ag43mqJHMWfhNnyYiqRSnT6c1Zr4blre/view?usp=sharing" },
          { label: "Semester Exam", href: "#" },
        ]
      },
      {
        name: "DC Machines and Transformers", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/16TKSeJVQ_teXoTYnDfTMH83yZJx8Kw5R/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1E1MNZZj9L83r1tw_dHkZaBWX_YpyGRiO/view?usp=sharing" },
          { label: "Semester Exam", href: "#" },
        ]
      },
      {
        name: "Analog Electronics", papers: [
          { label: "Series 1 (Coming Soon)", href: "#" },
          { label: "Series 2", href: "https://drive.google.com/file/d/18XTCdi7A7xIBNGKFgbpcKNLXsqMSQUPK/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "AI & Data Science", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/124HRpeKx_DL48BfeI8pYtz-jjJHcxTAC/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/13z03bcc-C-ipy09D7UDTKhGNSSyv8Fy5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Synchronous and Induction Machines",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1UoqbOT1Cu0ACgzWFP1wYfkujQ0BjxNAo/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/12AqM6HeQEKG7EHxMrUh5HfKQRvzrcCbY/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Power Electronics and Drives",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ENey7WUi5aVPrHXN3GFkDsLPrRLvffYu/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1wAE0htaZ6-IZU-RUeVXn6GE92J0jrWuw/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Digital Electronics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jbuFLFWJND2jsfU6d827Z301zNBwcMsP/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1p2yHPyW8GwOMdRRWHh26PaulnAccFiUH/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Economics for Engineer",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1V3_CAqHhRdet7ARx0wMuMjMlerogA6Xp/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1eQc-ycz5VYNuTQI8TnUDW5YESGqnGfoV/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Solid State Devices",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1sARyyZ5-Rr6wP9QJhru--tGWRZcA2SBy/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1-I7Dz3o9q5ydlNeLJKEQMsiUMxF3n6qs/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Mathematics for Machine Learning",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1uKMTfA0jUW4ZFzHTDwDBCE8kn426D_zs/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1EkfXsHmYYLYhw-uDopIePcOdKpXdyFj8/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Renewable Energy Sources",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aD5s3x2eKp4xp2PTXqYUjGRZ-k9FaXnc/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1YXH9svk7DdfHiTgJxNzTYTRoQxTE7CXw/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Computer Organization",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1JSG44RAfIC6Vd08ER9dUhn8U8lx4m2Wd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1CSihHosY0TKfnByKUatYQBkxT5qOZK47/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
    ],
  },
  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_ECP: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Electrical and Electronics Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1EOb1p7WHT4OKp6L_TF00Uq9HC8iIyH_l/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1jRUWVVJXD0HEe7XFaiRoMIxr7JntHsDv/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Chemistry",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1tbB-zshs7EKTck-nQnfQaAgQcItTF5JT/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1pFtGv3mI5BOnpZcDKyPlDbzlm-0eNgKb/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/16DSfgdyOZfxv_OmYF4peBNwUgtuJTZ8p/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ruSnBmc51BOh9dcZzRTOZ1didyBc7rq7/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Gm8wy63qmCOP1MnhFcuAhExLjgHDxM0P/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Graphics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/14V-8oI1zdssG-1TaLw4Ci4PrRy5M0AVA/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1t9CN6Sdfc7oA5VLd5DAy_gMIYR2ym9Ik/view?usp=sharing" },
        ]
      },
      {
        name: "Physics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Foundations of Computing", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1qlZwoigDbvBrV4lj_l36xfH8meBwJ5in/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WVkFBwzn9xO5UFE9MJyNYcyOwMJp-qtD/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-ImbEEJm29fFypJYUFRu2-1L2dE31GdP/view?usp=sharing" },
        ]
      },
      {
        name: "Programming in C", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15vt30ZXrLGDfCtCoXhso0Xmlbo0S_V9d/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15wlfzogU_gifC1g8Rv-7fIocG0Q1bRjh/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-2hmU_fwbScTJ9gzbZSZ7Hq2O9fdWJ05/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Analog Electronics (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1YlIxdhhq99WTfglIxcajWbFW_4RHO6MV/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Yp7fOsUhp8xEkl8368I8vDI4MX5EUDlQ/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Circuits and Networks", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1DESe0CgGYg52M0re6BHDdQf_3AEK9dAh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1ag43mqJHMWfhNnyYiqRSnT6c1Zr4blre/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1wKBSwhZN78FE3y82lUFn731qb2TVHHrd/view?usp=sharing" },
        ]
      },
      {
        name: "Data Structures and Algorithms", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1vlI9e1wvLNZj7Rlns5_rRq5TMOoLk-wv/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1YhtwhEZNm_e7XDxo61TMSWmL3H4f_pcV/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1Mtz70aRVde1PAaFRnMt_swbXKlj_d629/view?usp=sharing" },
        ]
      },
      {
        name: "Digital Electronics and Logic System Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1j0tH6DbbXR4u3yXrJgSmrvrIessYgFSb/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1QghQgA_JDaO02h8KRQHB6DQLceBY9wDQ/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "AI & DS", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/124HRpeKx_DL48BfeI8pYtz-jjJHcxTAC/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/13z03bcc-C-ipy09D7UDTKhGNSSyv8Fy5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Computer Organisation and Architecture",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GbJ9ooIbaqjHNbfz1i_EgfC8d3E6_D2v/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1aE4u-44DD5XCCss3kVC_JQB2BV-ac49Y/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Electrical Machines",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1572aWZDOmJ7w2VKwpF6SYdtgCBjZx_w-/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1S5NlN98cB78gI-8ixNLQfB_3qSP8dUeS/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Objective Oriented Programming",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1fGmoyYYcx6B-r6rRrIYWDApb-oMeuXLs/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dksnQ7osqv1OUoD12mGZBeOYBXivMTRF/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Economics for Engineers",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1V3_CAqHhRdet7ARx0wMuMjMlerogA6Xp/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1eQc-ycz5VYNuTQI8TnUDW5YESGqnGfoV/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Solid State Devices",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1sARyyZ5-Rr6wP9QJhru--tGWRZcA2SBy/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1-I7Dz3o9q5ydlNeLJKEQMsiUMxF3n6qs/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Mathematics for Machine Learning",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1uKMTfA0jUW4ZFzHTDwDBCE8kn426D_zs/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1EkfXsHmYYLYhw-uDopIePcOdKpXdyFj8/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Renewable Energy Sources",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aD5s3x2eKp4xp2PTXqYUjGRZ-k9FaXnc/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1YXH9svk7DdfHiTgJxNzTYTRoQxTE7CXw/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
    ],
  },

  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_AEI: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Electrical and Electronics Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1EOb1p7WHT4OKp6L_TF00Uq9HC8iIyH_l/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Chemistry",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1tbB-zshs7EKTck-nQnfQaAgQcItTF5JT/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1pFtGv3mI5BOnpZcDKyPlDbzlm-0eNgKb/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/16DSfgdyOZfxv_OmYF4peBNwUgtuJTZ8p/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1EefNlDQU7FgGKS8F5xhBbtjGXRRg2mYG/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1RzQ5m8Htt1UcTkRgDg2sb1UaFndgcgjm/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Graphics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dtaXzF7q79WCshc6gP30WRaB74DXwt8X/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1fKTAqD4ZBx5rzcWtdXf2F2e-WYPeAVYC/view?usp=sharing" },
        ]
      },
      {
        name: "Physics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Foundations of Computing", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1qlZwoigDbvBrV4lj_l36xfH8meBwJ5in/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1WVkFBwzn9xO5UFE9MJyNYcyOwMJp-qtD/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-ImbEEJm29fFypJYUFRu2-1L2dE31GdP/view?usp=sharing" },
        ]
      },
      {
        name: "Programming in C", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15vt30ZXrLGDfCtCoXhso0Xmlbo0S_V9d/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15wlfzogU_gifC1g8Rv-7fIocG0Q1bRjh/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1XnR7JTLRTV4uYXrC4FplfyJuxKFx4L99/view?usp=sharing" },
        ]
      },
      {
        name: "Network Theory (Core)", papers: [
          { label: "Series 1", href: "#" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1hriUzD9-OkRkvTHGzxRGXX7uvnBoU_jm/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Electronic Devices and Circuits", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1GoGbU_AKjFoIoorJC3Jh8ytdP2sneOHv/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Glmz7YIXLYmxnJvTBwfFOf4Tqiq5mV5r/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Transducers and Measurements", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1h6kg0DZLY3CkDAI5ZMKEsU9cpKhwTRAx/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1S0d37vv8hOHcQWnktJUikqr4HNwiTSdV/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Logic Circuit Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1OJeRm5gVVo2Ny0dn-cey-iz2XMKxxucb/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1CWem2sDdNg1Ll1O2LIWLdtUNlMJy6zz_/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1GO1BWhjOSCMflEFY4R9khKoFYvy516g7/view?usp=sharing" },
        ]
      },
      {
        name: "AI & Data Science", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/124HRpeKx_DL48BfeI8pYtz-jjJHcxTAC/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/13z03bcc-C-ipy09D7UDTKhGNSSyv8Fy5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Linear Integrated Circuits",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1lOfbzcwxr9f1qu1aTZJPTICiq9XcThxl/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1j9XB9e2tkoX9tkIwwjC3shHdw5_eCvs_/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Microcontrollers",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1v0o76LmH4NSKcyL91uTFMwGSHPsfn4LF/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Ds3cE_2hgnWLDo8sSZKbSQ_22NXHCHVP/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Signals and Systems",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1XvtKdayK17gaK-FIM3WtzVf6dd1rXcNB/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1RJO-fjHz-AWqVykb9fyTzSyemDX-h4V-/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Economics for Engineers",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1V3_CAqHhRdet7ARx0wMuMjMlerogA6Xp/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1eQc-ycz5VYNuTQI8TnUDW5YESGqnGfoV/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
      {
        name: "Digital Systems and VLSI Design",
        papers: [
          { label: "Series", href: "https://drive.google.com/file/d/19zseMpucKRN1-6ydwgOXleVLqtHRh7e5/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "" },
        ],
      },
    ],
  },
  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_ME: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Civil and Mechanical Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1htZurWeAQXzDEMeZIAD7YiP7HBSv-Jyh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Pu49dbWgGw4Bp5QlzNF1Bxs79WUojvQZ/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1GtsoEmtUmqsvRn15UEQMMmq-tacCtUBh/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Chemistry",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hxOfFnRTKo9YU5urFWoPi29U3CzagUMc/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iEOwLSwkoYg9Q8jEKSQpxUQxPNC6IlEy/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1UGbru8L_NZl-6UDMEYomJ_ms-nLzPwmz/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jQ_selckxf_GyeBo5Q_yGei_z5O9T-kO/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1PvetoN5XdPsAagn91cEpZDhmNf-HGeMp/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Mechanics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hvrafL1q3NR2nkXh8KrJx8bHqjUyaC26/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iNwvOdAsstLKeO4cUqdoyesi18SODduj/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1USRI_m_8HA_uZsNmKfMXd1GPQoml_lcw/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1eyf2U2VoIlxvD1_jgxtXd1QoiNqSX7bd/view?usp=sharing" },
        ]
      },
      {
        name: "Physics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f6951lhPCWwDz5fPwkEQiwAiKpeJKj_M/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Graphics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_cPgDndfQqzZf9PmYBNeRI_aoHxSM13I/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_cEWFt4y9PUKLZZlhaDlhsynnnrr_XNm/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f8DcBxAI5gIrdTGmhjc5ePZI5vcuYbNk/view?usp=sharing" },
        ]
      },
      {
        name: "Introduction to Electrical and Electronics Engineering", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1UpIHmrsGBCpU9dGtp9ql3pt6RuD0xfrY/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_i2I9XqoRZD4WKpMGbuTw-aSdUkq_tQ9/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-ImbEEJm29fFypJYUFRu2-1L2dE31GdP/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1zX0LZ5kswWDgEgigAJ5LOp5JJUv804Ua/view?usp=sharing" },
        ]
      },
      {
        name: "Material Science and Engineering (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jJNs7bwvlynkBVLxWptkEhIYvMbr5Qiu/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1q8klGX-0G4_hiLoA2fyVJXq9g45qTikm/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Fluid Mechanics & Machinery", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1SlMv4QyKOnLXuG5SVMQLwr-iNqFHcBFM/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1ne-keOCfa1V2QDCBoedPT9JP_Ucl5Fed/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Mechanics of Solids", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1qBJ7tZEpwYj9xOwF6LWoswK6tCdQlnIp/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1HMkBusSSOBUklAXkD-iEm8H9lSnzq4tr/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1G3Lp6sY0Vi4gRaFdusDMC9w6wEKKDIkK/view?usp=sharing" },
        ]
      },
      {
        name: "Manufacturing Processes", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1iAM7nf-A6FLpHPszAY3AuesLMy0aKEUx/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1-yNamELitk58XWw0r9co7SxTxK2ecf02/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "AI & Data Science", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Economics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1K6ILjHmE2etjQniFUqndinNRgLB0FWP5/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qHw9I_mTJm-0JGVWwCeCTHSLouIZp2sB/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1YldFc73c_lsCY7f_5eN_eSaPgY1mGQhz/view?usp=sharing" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1NPzE_jR5uFWRCoTNq3A9U86G2kF81BTd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1rmI-4lg53FYmO2cU3RHX22rvUVo5uOa4/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Machine Tools & Metrology", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1QWEpa-Hj1PA-oKOpO6ZCqodoUVUPqu0M/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/121bukgXlQRsZUN9gvuJ5Wof3rITsmIYi/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Thermodynamics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/17-dlMEeeYSOxP-rqCFw2mM-8m6x7Y3JC/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/19VdzX0cMhIkbC5lnwK178_q4bRITy34K/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Mechanics of Machinery", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1-E5iHAMyeju1MgOA7ZDwyerz3KTN7plQ/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/137xMLuYv9LEqvHKPzaS6__RZ-e_xlssN/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Components of Intelligent Systems", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1QxeCU90TRL9zdan6yipleELfUyOzQNKW/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1j7qDafEkN9gKpvc86xrhQJ2Lb3ts1MvZ/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Nuclear Energy", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1v-NgHy_Rn1L2kbhddHahCKRchxzy371u/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1dDjEooB16ih81KSF7DWW5C6O0eamlKUo/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Turbo Machinery", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1k4bUttivqEFsifIfWpyvx3t6WxpB-dlt/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1T_id1RNEzqODCaH3Kt1acAgjU239Fx52/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_CE: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Civil and Mechanical Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1htZurWeAQXzDEMeZIAD7YiP7HBSv-Jyh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Pu49dbWgGw4Bp5QlzNF1Bxs79WUojvQZ/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1GtsoEmtUmqsvRn15UEQMMmq-tacCtUBh/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Chemistry",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hxOfFnRTKo9YU5urFWoPi29U3CzagUMc/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iEOwLSwkoYg9Q8jEKSQpxUQxPNC6IlEy/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1UGbru8L_NZl-6UDMEYomJ_ms-nLzPwmz/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jQ_selckxf_GyeBo5Q_yGei_z5O9T-kO/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1PvetoN5XdPsAagn91cEpZDhmNf-HGeMp/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Mechanics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hvrafL1q3NR2nkXh8KrJx8bHqjUyaC26/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iNwvOdAsstLKeO4cUqdoyesi18SODduj/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1USRI_m_8HA_uZsNmKfMXd1GPQoml_lcw/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1V1rC7JiaraNr7lxJ09Y-ju6KMA1wNK8o/view?usp=sharing" },
        ]
      },
      {
        name: "Physics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f6951lhPCWwDz5fPwkEQiwAiKpeJKj_M/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Graphics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_cPgDndfQqzZf9PmYBNeRI_aoHxSM13I/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_cEWFt4y9PUKLZZlhaDlhsynnnrr_XNm/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f8DcBxAI5gIrdTGmhjc5ePZI5vcuYbNk/view?usp=sharing" },
        ]
      },
      {
        name: "Introduction to Electrical and Electronics Engineering", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1UpIHmrsGBCpU9dGtp9ql3pt6RuD0xfrY/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_i2I9XqoRZD4WKpMGbuTw-aSdUkq_tQ9/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1gCbrnv1wRTA4gv4SRnTFqtiubCH6n4tM/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1-DZSBfV8U5BzSUHZXK4iUAi_ka-zAY7Z/view?usp=sharing" },
        ]
      },
      {
        name: "Mechanics of Solids (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Iox5qsfWR5GGJKxi_frgei_IqjXeu9q/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_JPYVU8tYyeCEiyrsKDwosUo3ATge2qm/view?usp=sharing" },
          { label: "Semester Paper (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Fluid Mechanics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ERAhsUY2m-xbi6nHt-gdo8IIEGFSlMH-/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/16_26GOQVryH66BO061gNnc16pWxYylPC/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1zQYEZuFcArmCwBhldx5e5AUCqBCV9yBz/view?usp=sharing" },
        ]
      },
      {
        name: "Structural Analysis - I", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1r6Ysk9AqhKjFVODHTKLjBVcJRzFB6phH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1jAVnGtNpbiMRAQHD4kfAtWW02gcoughS/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/16n9WG-3nkOs_z0DZUb9WJ84hXY0Gpq3P/view?usp=sharing" },
        ]
      },
      {
        name: "Surveying & Geomatics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1mL35fmCr8ViAtHgdxxc9pT8VCPmkj-UV/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/10om6p6njFQfqJMd-SAQduGtODdGQB1y3/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1jRrh6Q7sH2gBZhp4pkfsHET2V-bCHAYC/view?usp=sharing" },
        ]
      },
      {
        name: "AI & DS", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Economics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1K6ILjHmE2etjQniFUqndinNRgLB0FWP5/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qHw9I_mTJm-0JGVWwCeCTHSLouIZp2sB/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1YldFc73c_lsCY7f_5eN_eSaPgY1mGQhz/view?usp=sharing" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Soil Mechanics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1z9z1ATypPhh_PBSMaS-6ZeQRbUG0DJJE/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1P48U6mMeCfb04qzzqLZebtKjLE2AyuEC/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Structural Analysis - II", papers: [
          { label: "Series 1 (Coming Soon)", href: "https://drive.google.com/file/d/1lbddoPyteghMtKhntcl6Bhmxsfkt_lMA/view?usp=sharing" },
          { label: "Series 2 (Coming Soon)", href: "https://drive.google.com/file/d/1XeyttZcVdCsSgYHa-iVvpnb1K7yYXAG8/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Design of Concrete Structures", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1f0tiZx2bzZpLPDLLw6gxV0FCpDV6tzcy/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1wO69px9tYpkaoXg36J9JBXrmemAKqvlU/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Concrete Technology", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1tGxsmK0yQn6NN3pfpjyJF-IvxGGf_D4P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1ZAk59mrXJ_vihtAsOyBps1onO-pr5xQW/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Architectural Engineering", papers: [
          { label: "Series", href: "https://drive.google.com/file/d/1MRVVLeVkzGQANahWhpscI0FSDhzSBJSM/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Mechanics of Fluid Flow", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C7e03fuQcYun4Wt0G3DEmDiTsn_6VzHY/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1zzdbxIgBkmiSB5AXXCtcJinjQIoUhzd3/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Engineering Geology", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/103FlOjQxkpSMGs3Z6W_16TaoS-Q_7b9N/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1PdPCmMedzWDOFJU5M3oI-Rxi_uzk9S_o/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Environmental Law & Policy", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1IoCIoaspzpqisWIE1kPPp7njoYf_va7I/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iCWPgVr3yhsQe4rvlyaLshvCMf1rv2Wz/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

export const QUESTION_IE: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Introduction to Civil and Mechanical Engineering",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1htZurWeAQXzDEMeZIAD7YiP7HBSv-Jyh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Pu49dbWgGw4Bp5QlzNF1Bxs79WUojvQZ/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1htZurWeAQXzDEMeZIAD7YiP7HBSv-Jyh/view?usp=sharing" },
        ],
      },
      {
        name: "Mathematics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=sharing" },
        ],
      },
      {
        name: "Chemistry",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hxOfFnRTKo9YU5urFWoPi29U3CzagUMc/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iEOwLSwkoYg9Q8jEKSQpxUQxPNC6IlEy/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1UGbru8L_NZl-6UDMEYomJ_ms-nLzPwmz/view?usp=sharing" },
        ],
      },
      {
        name: "Algorithmic Thinking with Python",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1jQ_selckxf_GyeBo5Q_yGei_z5O9T-kO/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1PvetoN5XdPsAagn91cEpZDhmNf-HGeMp/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=sharing" },
        ],
      },
      {
        name: "Engineering Mechanics",
        papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hvrafL1q3NR2nkXh8KrJx8bHqjUyaC26/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1iNwvOdAsstLKeO4cUqdoyesi18SODduj/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1USRI_m_8HA_uZsNmKfMXd1GPQoml_lcw/view?usp=sharing" },
        ],
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1eyf2U2VoIlxvD1_jgxtXd1QoiNqSX7bd/view?usp=sharing" },
        ]
      },
      {
        name: "Physics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f6951lhPCWwDz5fPwkEQiwAiKpeJKj_M/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Graphics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1_cPgDndfQqzZf9PmYBNeRI_aoHxSM13I/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_cEWFt4y9PUKLZZlhaDlhsynnnrr_XNm/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1f8DcBxAI5gIrdTGmhjc5ePZI5vcuYbNk/view?usp=sharing" },
        ]
      },
      {
        name: "Introduction to Electrical and Electronics Engineering", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1UpIHmrsGBCpU9dGtp9ql3pt6RuD0xfrY/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_i2I9XqoRZD4WKpMGbuTw-aSdUkq_tQ9/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1gCbrnv1wRTA4gv4SRnTFqtiubCH6n4tM/view?usp=sharing" },
        ]
      },
      {
        name: "Engineering Entrepreneurship", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1zX0LZ5kswWDgEgigAJ5LOp5JJUv804Ua/view?usp=sharing" },
        ]
      },
      {
        name: "Materials and Manufacturing Engineering (Core)", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1__r02vU7Id91OsBDrLOiYG-X8rPnpFV_/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1_aFc32QD_maE3zMGB81vHkHYDdAghA3I/view?usp=sharing" },
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1hJz_7iCqtFycKPqDsFLxVTqnHs_dcW4o/view?usp=sharing" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1C4KDX_qO0WAl8Qc-NycAOuHwNanNRLSH/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1XiQgYIlnOB2ez1R7ewXYXusUErVe2W7u/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1-62Ih_BZXsXBKoAH-KNN6ATXOFA7e8CJ/view?usp=sharing" },
        ]
      },
      {
        name: "Fluid Mechanics & Hydraulic Machines", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1ERAhsUY2m-xbi6nHt-gdo8IIEGFSlMH-/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/16_26GOQVryH66BO061gNnc16pWxYylPC/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1Ohe4D4iHbqm-K7USU1uw78nKIouKJOvd/view?usp=sharing" },
        ]
      },
      {
        name: "Thermal Engineering", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Uc1VCo3INgmimK4-DrBg65BsGmGVMa57/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1InLt3Twj17cm4DI_C1JXwRfxh2ju9CNf/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1RIkuze8w8sFN_VElesLmvfzY_ITSVZsP/view?usp=sharing" },
        ]
      },
      {
        name: "Operations Management", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1hm3v1TIkd5lsbEJ3iTuqtR98HvYvJCRu/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1IFzyR6vtXfwaB1YCO24pQOpin7fwOkQ0/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Economics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1K6ILjHmE2etjQniFUqndinNRgLB0FWP5/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1qHw9I_mTJm-0JGVWwCeCTHSLouIZp2sB/view?usp=sharing" },
          { label: "Semester Exam", href: "https://drive.google.com/file/d/1YldFc73c_lsCY7f_5eN_eSaPgY1mGQhz/view?usp=sharing" },
        ]
      },
      {
        name: "AI & DS", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1aw3VTFoVfckC6wI1Y0Zxr4nDOkdN7Ae3/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1Zaquk8rkClaV5osDJPGPJKCZ8BvApskj/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Mathematics", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1NPzE_jR5uFWRCoTNq3A9U86G2kF81BTd/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1rmI-4lg53FYmO2cU3RHX22rvUVo5uOa4/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Machine Tools & Digital Manufacturing", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1DomjRXeFueAgtm4n-CVczVO43lX11UwA/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1tPoRLy4BTh6mDIUb2Trzqp5mWK2JmM7K/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Work System Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1Dupkmrb9MA8CTvLZ9j-YOukP7pZHP6df/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1EmBrzm5Lf5T3Z4dbuD-J82uk1nahxDqN/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Theory of Machines and Design", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1-Q-MgRhoNwtPl4M7Zta15uSUN_NrIeKh/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1of4Zcm5JlbbfNhqhNSOxNqUJgc0vXXtT/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Robotics and Automation", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1YmPy3USXb4w8PWsts3KQj9JrOZdh2jBN/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1K52vlxggna-TOopfDi_9-EI0rvJ-yyZ3/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
      {
        name: "Modern Automotive Technologies", papers: [
          { label: "Series 1", href: "https://drive.google.com/file/d/1j3emo0z4hoEwqyVQ87aPo6eIXHAo7aFR/view?usp=sharing" },
          { label: "Series 2", href: "https://drive.google.com/file/d/1kIaWwohnClyZ17WwMtbN0QtkD3E9oCrY/view?usp=sharing" },
          { label: "Semester Exam (Coming Soon)", href: "#" },
        ]
      },
    ],
  },
  sem5: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem6: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

// ARCH has a different structure - semesters are displayed as cards, not subjects within semesters
export const QUESTION_ARCH: Record<string, SemesterPapers> = {
  sem1: {
    subjects: [
      {
        name: "Semester 1", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1l6iaGw5LmjXhUW51ct8KnUMxUbGAGnuZ/view?usp=sharing" },
        ]
      },
    ],
  },
  sem2: {
    subjects: [
      {
        name: "Semester 2", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1lArYZpODMhYcFGPUF3amo2neAkaXtzMH/view?usp=sharing" },
        ]
      },
    ],
  },
  sem3: {
    subjects: [
      {
        name: "Semester 3", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1l8lhVQ5jeRwCslWUzIgrM__KnOTuI8MU/view?usp=sharing" },
        ]
      },
    ],
  },
  sem4: {
    subjects: [
      {
        name: "Semester 4", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1lCjUNOMXedIM_RuPOqDibMOz23UWOdjO/view?usp=sharing" },
        ]
      },
    ],
  },
  sem5: {
    subjects: [
      {
        name: "Semester 5", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1lNYsBYpedRY7BAnuNTeKPWcbn8SJQ5Gx/view?usp=sharing" },
        ]
      },
    ],
  },
  sem6: {
    subjects: [
      {
        name: "Semester 6", papers: [
          { label: "Semester Paper", href: "https://drive.google.com/file/d/1lRIJZJtJNdY1KnSsJDONzyQnZzUXZ-98/view?usp=sharing" },
        ]
      },
    ],
  },
  sem7: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem8: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem9: { subjects: [{ name: "Coming Soon", papers: [] }] },
  sem10: { subjects: [{ name: "Coming Soon", papers: [] }] },
};

/** Placeholder for question pages not yet migrated. */
export const QUESTION_EMPTY: Record<string, SemesterPapers> = Object.fromEntries(
  SEM_KEYS.map((key) => [key, { subjects: [{ name: "Coming Soon", papers: [] }] }])
) as Record<string, SemesterPapers>;
