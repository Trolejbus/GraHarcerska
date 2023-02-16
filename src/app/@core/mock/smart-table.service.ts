import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    "id": 1,
    "firstName": "Tessie",
    "lastName": "Le Floch",
    "email": "tlefloch0@desdev.cn",
    "gender": "Polygender",
    "address": "PO Box 80671",
    "city": "Embi",
    "birthdate": "2005-08-29",
    "phone": "756-722-2475",
    "ssn": "478-54-9417"
  }, {
    "id": 2,
    "firstName": "Reinwald",
    "lastName": "Rain",
    "email": "rrain1@blinklist.com",
    "gender": "Mężczyzna",
    "address": "PO Box 26184",
    "city": "Austin",
    "birthdate": "2013-02-02",
    "phone": "512-660-6172",
    "ssn": "547-47-9030"
  }, {
    "id": 3,
    "firstName": "Clayborn",
    "lastName": "Camelli",
    "email": "ccamelli2@cnet.com",
    "gender": "Mężczyzna",
    "address": "8th Floor",
    "city": "Gampola",
    "birthdate": "1959-07-01",
    "phone": "127-709-0448",
    "ssn": "149-82-2467"
  }, {
    "id": 4,
    "firstName": "Evaleen",
    "lastName": "Piquard",
    "email": "epiquard3@webmd.com",
    "gender": "Kobieta",
    "address": "Apt 760",
    "city": "Tārūt",
    "birthdate": "2013-08-16",
    "phone": "113-166-6001",
    "ssn": "257-68-7879"
  }, {
    "id": 5,
    "firstName": "Janean",
    "lastName": "Vassar",
    "email": "jvassar4@whitehouse.gov",
    "gender": "Kobieta",
    "address": "17th Floor",
    "city": "Profítis Ilías",
    "birthdate": "1967-05-05",
    "phone": "139-487-0673",
    "ssn": "314-57-5326"
  }, {
    "id": 6,
    "firstName": "Otis",
    "lastName": "Birds",
    "email": "obirds5@t.co",
    "gender": "Mężczyzna",
    "address": "Room 238",
    "city": "Canoinhas",
    "birthdate": "2007-04-12",
    "phone": "265-879-6541",
    "ssn": "244-99-0547"
  }, {
    "id": 7,
    "firstName": "Colet",
    "lastName": "Longstaff",
    "email": "clongstaff6@blogtalkradio.com",
    "gender": "Mężczyzna",
    "address": "PO Box 18457",
    "city": "Salzburg",
    "birthdate": "1997-01-06",
    "phone": "591-884-7771",
    "ssn": "819-36-1626"
  }, {
    "id": 8,
    "firstName": "Seana",
    "lastName": "MacMorland",
    "email": "smacmorland7@utexas.edu",
    "gender": "Kobieta",
    "address": "Suite 32",
    "city": "Nanxi",
    "birthdate": "2015-12-13",
    "phone": "465-324-1448",
    "ssn": "659-73-9277"
  }, {
    "id": 9,
    "firstName": "Herrick",
    "lastName": "Lambrechts",
    "email": "hlambrechts8@google.es",
    "gender": "Mężczyzna",
    "address": "Apt 1789",
    "city": "Ak’ordat",
    "birthdate": "1964-08-30",
    "phone": "482-741-0965",
    "ssn": "431-11-3903"
  }, {
    "id": 10,
    "firstName": "Nina",
    "lastName": "Cumine",
    "email": "ncumine9@slashdot.org",
    "gender": "Kobieta",
    "address": "11th Floor",
    "city": "Berlin",
    "birthdate": "1962-01-09",
    "phone": "685-232-1716",
    "ssn": "486-84-2683"
  }, {
    "id": 11,
    "firstName": "Giff",
    "lastName": "Huddleston",
    "email": "ghuddlestona@1688.com",
    "gender": "Mężczyzna",
    "address": "13th Floor",
    "city": "Bazzāryah",
    "birthdate": "2015-09-12",
    "phone": "214-199-8372",
    "ssn": "500-95-4757"
  }, {
    "id": 12,
    "firstName": "Koenraad",
    "lastName": "Blinco",
    "email": "kblincob@twitpic.com",
    "gender": "Mężczyzna",
    "address": "PO Box 44419",
    "city": "Sampungu",
    "birthdate": "1951-09-13",
    "phone": "720-291-1810",
    "ssn": "779-71-7081"
  }, {
    "id": 13,
    "firstName": "Pieter",
    "lastName": "Cuttell",
    "email": "pcuttellc@arizona.edu",
    "gender": "Mężczyzna",
    "address": "14th Floor",
    "city": "Sandweiler",
    "birthdate": "1926-02-19",
    "phone": "297-356-0681",
    "ssn": "675-15-9409"
  }, {
    "id": 14,
    "firstName": "Bobinette",
    "lastName": "Legge",
    "email": "blegged@icq.com",
    "gender": "Kobieta",
    "address": "Suite 98",
    "city": "Yangzizhou",
    "birthdate": "1984-10-28",
    "phone": "833-924-0191",
    "ssn": "727-25-8154"
  }, {
    "id": 15,
    "firstName": "Vera",
    "lastName": "Brisco",
    "email": "vbriscoe@yale.edu",
    "gender": "Kobieta",
    "address": "4th Floor",
    "city": "Polepy",
    "birthdate": "2018-10-20",
    "phone": "879-686-8941",
    "ssn": "592-27-6302"
  }, {
    "id": 16,
    "firstName": "Verena",
    "lastName": "Matczak",
    "email": "vmatczakf@usatoday.com",
    "gender": "Kobieta",
    "address": "PO Box 93744",
    "city": "Övertorneå",
    "birthdate": "1988-02-18",
    "phone": "474-512-3120",
    "ssn": "153-75-2423"
  }, {
    "id": 17,
    "firstName": "Lauretta",
    "lastName": "Enrietto",
    "email": "lenriettog@wordpress.com",
    "gender": "Kobieta",
    "address": "Room 989",
    "city": "Likhoy",
    "birthdate": "1993-07-02",
    "phone": "792-870-3238",
    "ssn": "753-14-6225"
  }, {
    "id": 18,
    "firstName": "Cariotta",
    "lastName": "Summerson",
    "email": "csummersonh@msu.edu",
    "gender": "Bigender",
    "address": "1st Floor",
    "city": "Dingjiayao",
    "birthdate": "1957-03-12",
    "phone": "289-187-8316",
    "ssn": "376-29-6269"
  }, {
    "id": 19,
    "firstName": "Westley",
    "lastName": "Fabry",
    "email": "wfabryi@unc.edu",
    "gender": "Mężczyzna",
    "address": "Apt 763",
    "city": "Wao",
    "birthdate": "1935-05-31",
    "phone": "418-924-3466",
    "ssn": "177-40-8349"
  }, {
    "id": 20,
    "firstName": "Alberto",
    "lastName": "Clibbery",
    "email": "aclibberyj@netlog.com",
    "gender": "Mężczyzna",
    "address": "Apt 1465",
    "city": "Balangonan",
    "birthdate": "1996-11-04",
    "phone": "145-971-4667",
    "ssn": "173-35-0214"
  }, {
    "id": 21,
    "firstName": "Hatty",
    "lastName": "Leworthy",
    "email": "hleworthyk@shop-pro.jp",
    "gender": "Kobieta",
    "address": "Apt 1347",
    "city": "Murindó",
    "birthdate": "1982-07-14",
    "phone": "223-983-0886",
    "ssn": "663-37-5828"
  }, {
    "id": 22,
    "firstName": "Mycah",
    "lastName": "Archbald",
    "email": "marchbaldl@ibm.com",
    "gender": "Bigender",
    "address": "Apt 1329",
    "city": "Vilufushi",
    "birthdate": "1937-04-28",
    "phone": "248-136-8423",
    "ssn": "710-48-6456"
  }, {
    "id": 23,
    "firstName": "Anita",
    "lastName": "Bass",
    "email": "abassm@cdbaby.com",
    "gender": "Kobieta",
    "address": "Suite 40",
    "city": "Bueng Khong Long",
    "birthdate": "2001-03-26",
    "phone": "712-604-6430",
    "ssn": "488-95-4822"
  }, {
    "id": 24,
    "firstName": "Midge",
    "lastName": "Delph",
    "email": "mdelphn@seesaa.net",
    "gender": "Genderqueer",
    "address": "PO Box 88795",
    "city": "Shiḩan as Suflá",
    "birthdate": "1960-12-28",
    "phone": "634-274-6019",
    "ssn": "188-67-1304"
  }, {
    "id": 25,
    "firstName": "Heloise",
    "lastName": "Dwerryhouse",
    "email": "hdwerryhouseo@cam.ac.uk",
    "gender": "Kobieta",
    "address": "PO Box 26578",
    "city": "Tajao",
    "birthdate": "1961-04-04",
    "phone": "819-415-5349",
    "ssn": "460-97-0717"
  }, {
    "id": 26,
    "firstName": "Dorena",
    "lastName": "McFarland",
    "email": "dmcfarlandp@yahoo.com",
    "gender": "Kobieta",
    "address": "12th Floor",
    "city": "Sainte-Anne-de-Bellevue",
    "birthdate": "2019-02-01",
    "phone": "653-882-2243",
    "ssn": "378-56-8898"
  }, {
    "id": 27,
    "firstName": "Karisa",
    "lastName": "Pleager",
    "email": "kpleagerq@hud.gov",
    "gender": "Kobieta",
    "address": "Apt 374",
    "city": "Sadkowice",
    "birthdate": "1943-10-07",
    "phone": "134-712-1411",
    "ssn": "432-31-7524"
  }, {
    "id": 28,
    "firstName": "Roarke",
    "lastName": "Hultberg",
    "email": "rhultbergr@mail.ru",
    "gender": "Mężczyzna",
    "address": "14th Floor",
    "city": "Göteborg",
    "birthdate": "1970-09-07",
    "phone": "872-785-7438",
    "ssn": "380-98-9112"
  }, {
    "id": 29,
    "firstName": "Shelby",
    "lastName": "Rothman",
    "email": "srothmans@tumblr.com",
    "gender": "Mężczyzna",
    "address": "Apt 1956",
    "city": "Sembungan Kidul",
    "birthdate": "2013-12-28",
    "phone": "805-601-3262",
    "ssn": "802-78-7847"
  }, {
    "id": 30,
    "firstName": "Grier",
    "lastName": "Swyer-Sexey",
    "email": "gswyersexeyt@dion.ne.jp",
    "gender": "Kobieta",
    "address": "Suite 12",
    "city": "Terre Haute",
    "birthdate": "1927-11-26",
    "phone": "812-765-1045",
    "ssn": "485-74-0662"
  }, {
    "id": 31,
    "firstName": "Adey",
    "lastName": "Buesden",
    "email": "abuesdenu@whitehouse.gov",
    "gender": "Kobieta",
    "address": "14th Floor",
    "city": "Huaihe",
    "birthdate": "1925-01-17",
    "phone": "989-801-1316",
    "ssn": "898-96-6653"
  }, {
    "id": 32,
    "firstName": "Russell",
    "lastName": "Willett",
    "email": "rwillettv@1und1.de",
    "gender": "Mężczyzna",
    "address": "PO Box 23380",
    "city": "Lübeck",
    "birthdate": "1922-02-09",
    "phone": "462-171-3402",
    "ssn": "489-39-1475"
  }, {
    "id": 33,
    "firstName": "Jamie",
    "lastName": "Algar",
    "email": "jalgarw@prlog.org",
    "gender": "Bigender",
    "address": "5th Floor",
    "city": "Wan’an",
    "birthdate": "1999-06-18",
    "phone": "897-435-8392",
    "ssn": "660-44-8324"
  }, {
    "id": 34,
    "firstName": "Liesa",
    "lastName": "Oliveto",
    "email": "lolivetox@weebly.com",
    "gender": "Kobieta",
    "address": "Suite 100",
    "city": "Xingyuan",
    "birthdate": "2009-09-30",
    "phone": "226-646-6604",
    "ssn": "146-01-3062"
  }, {
    "id": 35,
    "firstName": "Kris",
    "lastName": "Lassey",
    "email": "klasseyy@cdbaby.com",
    "gender": "Kobieta",
    "address": "Apt 1198",
    "city": "Chonglou",
    "birthdate": "1994-07-29",
    "phone": "697-645-0224",
    "ssn": "333-43-6209"
  }, {
    "id": 36,
    "firstName": "Elspeth",
    "lastName": "Skeels",
    "email": "eskeelsz@purevolume.com",
    "gender": "Kobieta",
    "address": "PO Box 64963",
    "city": "Xiaoshun",
    "birthdate": "1982-04-29",
    "phone": "902-506-9252",
    "ssn": "730-80-3664"
  }, {
    "id": 37,
    "firstName": "Nil",
    "lastName": "Effemy",
    "email": "neffemy10@squidoo.com",
    "gender": "Mężczyzna",
    "address": "1st Floor",
    "city": "Panggungsari",
    "birthdate": "1947-12-03",
    "phone": "865-498-1653",
    "ssn": "306-71-5121"
  }, {
    "id": 38,
    "firstName": "Claiborne",
    "lastName": "Castard",
    "email": "ccastard11@phpbb.com",
    "gender": "Mężczyzna",
    "address": "Apt 1602",
    "city": "Qintang",
    "birthdate": "1955-02-23",
    "phone": "243-174-3520",
    "ssn": "762-78-1986"
  }, {
    "id": 39,
    "firstName": "Scotti",
    "lastName": "Benbow",
    "email": "sbenbow12@reddit.com",
    "gender": "Mężczyzna",
    "address": "Room 1242",
    "city": "Santa Cruz",
    "birthdate": "1948-02-19",
    "phone": "262-338-8489",
    "ssn": "558-31-3148"
  }, {
    "id": 40,
    "firstName": "Ninetta",
    "lastName": "Tuff",
    "email": "ntuff13@macromedia.com",
    "gender": "Kobieta",
    "address": "PO Box 94961",
    "city": "'s-Hertogenbosch",
    "birthdate": "1931-01-01",
    "phone": "824-802-3810",
    "ssn": "322-46-4582"
  }, {
    "id": 41,
    "firstName": "Murvyn",
    "lastName": "Rojahn",
    "email": "mrojahn14@i2i.jp",
    "gender": "Mężczyzna",
    "address": "PO Box 97731",
    "city": "Salavat",
    "birthdate": "1930-11-10",
    "phone": "380-665-9885",
    "ssn": "438-16-2582"
  }, {
    "id": 42,
    "firstName": "Natalie",
    "lastName": "Falkingham",
    "email": "nfalkingham15@technorati.com",
    "gender": "Kobieta",
    "address": "PO Box 17801",
    "city": "Yunlu",
    "birthdate": "1958-08-03",
    "phone": "656-376-8196",
    "ssn": "511-66-1864"
  }, {
    "id": 43,
    "firstName": "Robin",
    "lastName": "Picopp",
    "email": "rpicopp16@columbia.edu",
    "gender": "Mężczyzna",
    "address": "Suite 19",
    "city": "Banjar Sembunggede",
    "birthdate": "1976-11-02",
    "phone": "708-638-0545",
    "ssn": "401-36-5909"
  }, {
    "id": 44,
    "firstName": "Eustacia",
    "lastName": "Robke",
    "email": "erobke17@nifty.com",
    "gender": "Kobieta",
    "address": "Room 806",
    "city": "Garahaji",
    "birthdate": "1983-11-07",
    "phone": "788-633-6321",
    "ssn": "470-29-8195"
  }, {
    "id": 45,
    "firstName": "Winifred",
    "lastName": "Chasmar",
    "email": "wchasmar18@pinterest.com",
    "gender": "Kobieta",
    "address": "1st Floor",
    "city": "Līgatne",
    "birthdate": "2017-09-17",
    "phone": "932-130-1215",
    "ssn": "653-57-2885"
  }, {
    "id": 46,
    "firstName": "Roma",
    "lastName": "Brackley",
    "email": "rbrackley19@instagram.com",
    "gender": "Mężczyzna",
    "address": "10th Floor",
    "city": "Pavlovskiy Posad",
    "birthdate": "1989-02-16",
    "phone": "191-379-1737",
    "ssn": "205-31-6350"
  }, {
    "id": 47,
    "firstName": "Franciskus",
    "lastName": "Snelling",
    "email": "fsnelling1a@bigcartel.com",
    "gender": "Mężczyzna",
    "address": "10th Floor",
    "city": "Alingsås",
    "birthdate": "1942-07-05",
    "phone": "860-339-1400",
    "ssn": "855-64-9545"
  }, {
    "id": 48,
    "firstName": "Joseph",
    "lastName": "Nickols",
    "email": "jnickols1b@cargocollective.com",
    "gender": "Mężczyzna",
    "address": "Apt 357",
    "city": "Karmah an Nuzul",
    "birthdate": "1995-03-11",
    "phone": "588-610-8081",
    "ssn": "371-54-2438"
  }, {
    "id": 49,
    "firstName": "Rita",
    "lastName": "Hallitt",
    "email": "rhallitt1c@oracle.com",
    "gender": "Kobieta",
    "address": "PO Box 98676",
    "city": "Khāsh",
    "birthdate": "1998-09-23",
    "phone": "876-183-2494",
    "ssn": "447-48-5979"
  }, {
    "id": 50,
    "firstName": "Magda",
    "lastName": "Marchiso",
    "email": "mmarchiso1d@home.pl",
    "gender": "Kobieta",
    "address": "PO Box 80341",
    "city": "Tarata",
    "birthdate": "1975-02-19",
    "phone": "904-363-4478",
    "ssn": "661-75-0124"
  }, {
    "id": 51,
    "firstName": "Sander",
    "lastName": "Motherwell",
    "email": "smotherwell1e@aol.com",
    "gender": "Mężczyzna",
    "address": "Apt 917",
    "city": "Lindavista",
    "birthdate": "1950-01-11",
    "phone": "699-654-9560",
    "ssn": "854-52-9090"
  }, {
    "id": 52,
    "firstName": "Tedra",
    "lastName": "Smittoune",
    "email": "tsmittoune1f@deliciousdays.com",
    "gender": "Kobieta",
    "address": "Suite 86",
    "city": "Kunyang",
    "birthdate": "2009-09-28",
    "phone": "538-592-1599",
    "ssn": "316-66-8367"
  }, {
    "id": 53,
    "firstName": "Cobb",
    "lastName": "Gosker",
    "email": "cgosker1g@alexa.com",
    "gender": "Mężczyzna",
    "address": "PO Box 65278",
    "city": "Cândido Mota",
    "birthdate": "2004-01-31",
    "phone": "906-139-6099",
    "ssn": "370-61-7410"
  }, {
    "id": 54,
    "firstName": "Gwenneth",
    "lastName": "Enderby",
    "email": "genderby1h@ftc.gov",
    "gender": "Kobieta",
    "address": "Room 116",
    "city": "Krasnokamensk",
    "birthdate": "1947-11-21",
    "phone": "380-810-4090",
    "ssn": "820-36-1110"
  }, {
    "id": 55,
    "firstName": "Cyndi",
    "lastName": "Czaple",
    "email": "cczaple1i@state.tx.us",
    "gender": "Kobieta",
    "address": "Room 1767",
    "city": "Mafinga",
    "birthdate": "1966-10-28",
    "phone": "272-372-6642",
    "ssn": "782-27-3110"
  }, {
    "id": 56,
    "firstName": "Meghann",
    "lastName": "Portinari",
    "email": "mportinari1j@omniture.com",
    "gender": "Kobieta",
    "address": "19th Floor",
    "city": "Carlsbad",
    "birthdate": "1961-04-06",
    "phone": "760-578-5858",
    "ssn": "158-83-4942"
  }, {
    "id": 57,
    "firstName": "Max",
    "lastName": "Shotboult",
    "email": "mshotboult1k@sogou.com",
    "gender": "Kobieta",
    "address": "9th Floor",
    "city": "Nocaima",
    "birthdate": "1991-09-05",
    "phone": "666-662-3474",
    "ssn": "453-67-7548"
  }, {
    "id": 58,
    "firstName": "Malcolm",
    "lastName": "Brigden",
    "email": "mbrigden1l@salon.com",
    "gender": "Mężczyzna",
    "address": "7th Floor",
    "city": "Shayu",
    "birthdate": "1987-01-11",
    "phone": "888-487-2219",
    "ssn": "366-79-8191"
  }, {
    "id": 59,
    "firstName": "Farrel",
    "lastName": "Addicott",
    "email": "faddicott1m@mapy.cz",
    "gender": "Mężczyzna",
    "address": "11th Floor",
    "city": "New Pandanon",
    "birthdate": "1985-09-02",
    "phone": "203-144-4402",
    "ssn": "526-10-0165"
  }, {
    "id": 60,
    "firstName": "Matthew",
    "lastName": "Abbets",
    "email": "mabbets1n@skyrock.com",
    "gender": "Mężczyzna",
    "address": "14th Floor",
    "city": "Puutura",
    "birthdate": "1954-01-09",
    "phone": "438-953-4545",
    "ssn": "408-65-2157"
  }, {
    "id": 61,
    "firstName": "Findley",
    "lastName": "Awty",
    "email": "fawty1o@linkedin.com",
    "gender": "Mężczyzna",
    "address": "Room 311",
    "city": "Älvdalen",
    "birthdate": "1988-03-05",
    "phone": "265-609-0464",
    "ssn": "520-82-4613"
  }, {
    "id": 62,
    "firstName": "Renaldo",
    "lastName": "Guidera",
    "email": "rguidera1p@multiply.com",
    "gender": "Mężczyzna",
    "address": "PO Box 52176",
    "city": "Usman’",
    "birthdate": "1923-02-20",
    "phone": "375-652-2616",
    "ssn": "372-65-6895"
  }, {
    "id": 63,
    "firstName": "Twila",
    "lastName": "MacKill",
    "email": "tmackill1q@un.org",
    "gender": "Kobieta",
    "address": "Room 161",
    "city": "Chrastava",
    "birthdate": "1937-05-31",
    "phone": "627-811-8698",
    "ssn": "116-06-8331"
  }, {
    "id": 64,
    "firstName": "Dru",
    "lastName": "Wink",
    "email": "dwink1r@marketwatch.com",
    "gender": "Kobieta",
    "address": "PO Box 98573",
    "city": "Ban Muang",
    "birthdate": "1943-12-08",
    "phone": "498-835-0148",
    "ssn": "525-79-1241"
  }, {
    "id": 65,
    "firstName": "Thea",
    "lastName": "Labrom",
    "email": "tlabrom1s@hud.gov",
    "gender": "Kobieta",
    "address": "18th Floor",
    "city": "Zhongshan",
    "birthdate": "1968-06-21",
    "phone": "854-433-4333",
    "ssn": "389-01-4845"
  }, {
    "id": 66,
    "firstName": "Debbie",
    "lastName": "Sartain",
    "email": "dsartain1t@unblog.fr",
    "gender": "Kobieta",
    "address": "Room 193",
    "city": "Beitou",
    "birthdate": "1956-08-15",
    "phone": "176-649-5174",
    "ssn": "471-23-4868"
  }, {
    "id": 67,
    "firstName": "Alberto",
    "lastName": "Elcoate",
    "email": "aelcoate1u@ameblo.jp",
    "gender": "Mężczyzna",
    "address": "Room 1684",
    "city": "Mendes",
    "birthdate": "2016-08-26",
    "phone": "384-958-7271",
    "ssn": "725-29-5764"
  }, {
    "id": 68,
    "firstName": "Anetta",
    "lastName": "Bloxsum",
    "email": "abloxsum1v@cnbc.com",
    "gender": "Kobieta",
    "address": "Room 1681",
    "city": "Guanhães",
    "birthdate": "1958-01-30",
    "phone": "179-639-0843",
    "ssn": "282-87-4701"
  }, {
    "id": 69,
    "firstName": "Phaedra",
    "lastName": "Van der Velden",
    "email": "pvandervelden1w@histats.com",
    "gender": "Kobieta",
    "address": "Room 245",
    "city": "Livadiya",
    "birthdate": "1925-05-18",
    "phone": "207-706-4374",
    "ssn": "765-40-5412"
  }, {
    "id": 70,
    "firstName": "Gorden",
    "lastName": "Manford",
    "email": "gmanford1x@stanford.edu",
    "gender": "Mężczyzna",
    "address": "Apt 1161",
    "city": "Rainis",
    "birthdate": "1945-12-14",
    "phone": "932-679-9924",
    "ssn": "717-65-3082"
  }, {
    "id": 71,
    "firstName": "Wallas",
    "lastName": "O'Dyvoy",
    "email": "wodyvoy1y@sfgate.com",
    "gender": "Mężczyzna",
    "address": "PO Box 19453",
    "city": "Paris 13",
    "birthdate": "2001-12-02",
    "phone": "287-119-0017",
    "ssn": "308-45-0816"
  }, {
    "id": 72,
    "firstName": "Hilda",
    "lastName": "Oller",
    "email": "holler1z@bluehost.com",
    "gender": "Kobieta",
    "address": "PO Box 34058",
    "city": "Gulbene",
    "birthdate": "2004-02-13",
    "phone": "531-974-1005",
    "ssn": "783-91-0297"
  }, {
    "id": 73,
    "firstName": "Rori",
    "lastName": "Duddle",
    "email": "rduddle20@dedecms.com",
    "gender": "Kobieta",
    "address": "20th Floor",
    "city": "Kassel",
    "birthdate": "1977-02-14",
    "phone": "825-270-5254",
    "ssn": "346-78-1177"
  }, {
    "id": 74,
    "firstName": "Libby",
    "lastName": "Colter",
    "email": "lcolter21@europa.eu",
    "gender": "Kobieta",
    "address": "Apt 260",
    "city": "Jiangshi",
    "birthdate": "2011-04-20",
    "phone": "401-138-5195",
    "ssn": "878-79-1323"
  }, {
    "id": 75,
    "firstName": "Clifford",
    "lastName": "Petett",
    "email": "cpetett22@google.ru",
    "gender": "Polygender",
    "address": "PO Box 61329",
    "city": "Washington",
    "birthdate": "1979-03-14",
    "phone": "202-762-4232",
    "ssn": "310-12-4962"
  }, {
    "id": 76,
    "firstName": "Giacopo",
    "lastName": "Teodorski",
    "email": "gteodorski23@e-recht24.de",
    "gender": "Polygender",
    "address": "Suite 3",
    "city": "Provatás",
    "birthdate": "1937-07-11",
    "phone": "934-357-7253",
    "ssn": "284-36-8670"
  }, {
    "id": 77,
    "firstName": "Alecia",
    "lastName": "Marde",
    "email": "amarde24@1und1.de",
    "gender": "Kobieta",
    "address": "Room 996",
    "city": "Oudtshoorn",
    "birthdate": "1998-07-23",
    "phone": "787-898-4543",
    "ssn": "457-85-5630"
  }, {
    "id": 78,
    "firstName": "Sabra",
    "lastName": "Prestie",
    "email": "sprestie25@microsoft.com",
    "gender": "Kobieta",
    "address": "Room 283",
    "city": "Putrajaya",
    "birthdate": "1979-02-23",
    "phone": "969-638-4742",
    "ssn": "282-41-9485"
  }, {
    "id": 79,
    "firstName": "Ramona",
    "lastName": "Andrioli",
    "email": "randrioli26@apache.org",
    "gender": "Non-binary",
    "address": "Room 1642",
    "city": "Kabacan",
    "birthdate": "1955-04-30",
    "phone": "718-946-4511",
    "ssn": "591-30-8593"
  }, {
    "id": 80,
    "firstName": "Velvet",
    "lastName": "Glaum",
    "email": "vglaum27@google.pl",
    "gender": "Non-binary",
    "address": "Suite 20",
    "city": "Huế",
    "birthdate": "1967-01-16",
    "phone": "583-971-4617",
    "ssn": "845-38-9425"
  }, {
    "id": 81,
    "firstName": "Brietta",
    "lastName": "Klesl",
    "email": "bklesl28@jimdo.com",
    "gender": "Kobieta",
    "address": "Apt 1496",
    "city": "Várzea",
    "birthdate": "1994-11-10",
    "phone": "740-811-5524",
    "ssn": "452-11-5039"
  }, {
    "id": 82,
    "firstName": "Hamish",
    "lastName": "Jaffrey",
    "email": "hjaffrey29@meetup.com",
    "gender": "Mężczyzna",
    "address": "14th Floor",
    "city": "Vanves",
    "birthdate": "1934-11-30",
    "phone": "283-411-6387",
    "ssn": "168-99-4238"
  }, {
    "id": 83,
    "firstName": "Kipp",
    "lastName": "Camous",
    "email": "kcamous2a@sakura.ne.jp",
    "gender": "Kobieta",
    "address": "4th Floor",
    "city": "Dingdian",
    "birthdate": "1928-05-04",
    "phone": "835-303-1147",
    "ssn": "743-11-1465"
  }, {
    "id": 84,
    "firstName": "Loy",
    "lastName": "Pettinger",
    "email": "lpettinger2b@bizjournals.com",
    "gender": "Polygender",
    "address": "Room 329",
    "city": "Xinming",
    "birthdate": "2000-11-12",
    "phone": "229-464-4373",
    "ssn": "457-59-8040"
  }, {
    "id": 85,
    "firstName": "Adelheid",
    "lastName": "Cargenven",
    "email": "acargenven2c@alexa.com",
    "gender": "Kobieta",
    "address": "Suite 86",
    "city": "Shiyan",
    "birthdate": "1958-11-15",
    "phone": "925-229-6144",
    "ssn": "365-49-9255"
  }, {
    "id": 86,
    "firstName": "Shurwood",
    "lastName": "Chucks",
    "email": "schucks2d@domainmarket.com",
    "gender": "Mężczyzna",
    "address": "PO Box 24048",
    "city": "España",
    "birthdate": "1935-09-19",
    "phone": "667-543-4745",
    "ssn": "219-10-8181"
  }, {
    "id": 87,
    "firstName": "Sam",
    "lastName": "Meriet",
    "email": "smeriet2e@indiegogo.com",
    "gender": "Mężczyzna",
    "address": "Apt 1797",
    "city": "Edineţ",
    "birthdate": "2007-05-19",
    "phone": "310-468-6248",
    "ssn": "625-82-6882"
  }, {
    "id": 88,
    "firstName": "Keeley",
    "lastName": "Whitemarsh",
    "email": "kwhitemarsh2f@newyorker.com",
    "gender": "Kobieta",
    "address": "17th Floor",
    "city": "Kaz",
    "birthdate": "1989-07-09",
    "phone": "714-420-0378",
    "ssn": "593-84-2474"
  }, {
    "id": 89,
    "firstName": "Cindelyn",
    "lastName": "Bowton",
    "email": "cbowton2g@homestead.com",
    "gender": "Kobieta",
    "address": "Room 943",
    "city": "Ruma",
    "birthdate": "1939-12-12",
    "phone": "464-834-8233",
    "ssn": "332-99-7685"
  }, {
    "id": 90,
    "firstName": "Isahella",
    "lastName": "McCathay",
    "email": "imccathay2h@nature.com",
    "gender": "Kobieta",
    "address": "Room 633",
    "city": "Kadusimbar",
    "birthdate": "1964-04-23",
    "phone": "921-156-9045",
    "ssn": "161-69-3449"
  }, {
    "id": 91,
    "firstName": "Kirstyn",
    "lastName": "Salliss",
    "email": "ksalliss2i@ezinearticles.com",
    "gender": "Kobieta",
    "address": "PO Box 56456",
    "city": "Biliri",
    "birthdate": "1945-06-18",
    "phone": "587-643-8296",
    "ssn": "829-21-5132"
  }, {
    "id": 92,
    "firstName": "Ann",
    "lastName": "Lethebridge",
    "email": "alethebridge2j@toplist.cz",
    "gender": "Kobieta",
    "address": "10th Floor",
    "city": "Taiyang",
    "birthdate": "2015-06-24",
    "phone": "809-146-0179",
    "ssn": "663-03-2519"
  }, {
    "id": 93,
    "firstName": "Matthaeus",
    "lastName": "Hedges",
    "email": "mhedges2k@ask.com",
    "gender": "Mężczyzna",
    "address": "PO Box 57936",
    "city": "Winburg",
    "birthdate": "2016-07-24",
    "phone": "637-134-5208",
    "ssn": "687-63-1664"
  }, {
    "id": 94,
    "firstName": "Auberta",
    "lastName": "Juschke",
    "email": "ajuschke2l@e-recht24.de",
    "gender": "Kobieta",
    "address": "PO Box 8247",
    "city": "Qihama",
    "birthdate": "2006-07-27",
    "phone": "824-359-9278",
    "ssn": "793-71-5105"
  }, {
    "id": 95,
    "firstName": "Judi",
    "lastName": "O' Clovan",
    "email": "joclovan2m@census.gov",
    "gender": "Kobieta",
    "address": "16th Floor",
    "city": "Changling",
    "birthdate": "1977-08-05",
    "phone": "461-912-2345",
    "ssn": "601-66-6194"
  }, {
    "id": 96,
    "firstName": "Tilda",
    "lastName": "Licciardi",
    "email": "tlicciardi2n@lycos.com",
    "gender": "Bigender",
    "address": "Room 543",
    "city": "Strumica",
    "birthdate": "1994-08-07",
    "phone": "676-612-4027",
    "ssn": "392-35-2423"
  }, {
    "id": 97,
    "firstName": "Elsbeth",
    "lastName": "Torrecilla",
    "email": "etorrecilla2o@uiuc.edu",
    "gender": "Kobieta",
    "address": "Room 1959",
    "city": "Slavonice",
    "birthdate": "1972-03-08",
    "phone": "287-599-7009",
    "ssn": "308-78-5060"
  }, {
    "id": 98,
    "firstName": "Sidney",
    "lastName": "Neubigging",
    "email": "sneubigging2p@bing.com",
    "gender": "Kobieta",
    "address": "Suite 13",
    "city": "Pierzchnica",
    "birthdate": "1978-11-05",
    "phone": "170-751-4449",
    "ssn": "461-42-7296"
  }, {
    "id": 415,
    "firstName": "Emilia",
    "lastName": "Simpson",
    "email": "brak",
    "gender": "Kobieta",
    "address": "Apt 1194",
    "city": "Shanhou",
    "birthdate": "1950-08-06",
    "phone": "505-764-615",
    "ssn": "814-03-5088",
    "photo": "nick3.png",
    "print": "p5"
  }, {
    "id": 930,
    "firstName": "Jake",
    "lastName": "Long",
    "email": "brak",
    "gender": "Mężczyzna",
    "address": "Ośrodek Totustus domek nr 7",
    "city": "Arkham",
    "birthdate": "1945-02-11",
    "phone": "216-954-2644",
    "ssn": "814-03-5083",
    "photo": "nick4.png",
    "print": "p2",
    "info": "1970 - rozprawa przeciw Jake Long oraz Joel Simpson, uczestniczenie w zorganizowanej grupie przestępczej handlującej skradzionymi i podrobionymi dziełami sztuki. Uniewinnieni z powodu braku dowodów. Relacje świadków świadczą jednak, że jest to prawda, ale nie udało się znaleźć wystarczających powodów."
  }, {
    "id": 1045,
    "firstName": "Henry",
    "lastName": "Long",
    "email": "brak",
    "gender": "Mężczyzna",
    "address": "Ośrodek Totustus Sala nr 5",
    "city": "Arkham",
    "birthdate": "1970-03-14",
    "phone": "883-203-598",
    "ssn": "123-03-5083",
    "photo": "nick5.png",
    "info": "1992 - 2000 - Udział w zorganizowanej organizacji przestępczej. 2000 - proces zakończony skazaniem na 5 lat więzienia z 5 letnim okresem warunkowym."
  }, {
    "id": 1135,
    "firstName": "Joel",
    "lastName": "Simpson",
    "email": "brak",
    "gender": "Mężczyzna",
    "address": "Apt 1194",
    "city": "Shanhou",
    "birthdate": "1924-05-15",
    "phone": "539-922-404",
    "ssn": "143-03-5083",
    "print": "p1",
    "photo": "nick6.png",
  }, {
    "id": 1185,
    "firstName": "Sidney",
    "lastName": "Hughes",
    "email": "brak",
    "gender": "Mężczyzna",
    "address": "Ośrodek Totustus domek nr 7",
    "city": "Arkham",
    "birthdate": "1925-08-30",
    "phone": "brak",
    "ssn": "999-03-5083",
    "print": "p3",
    "photo": "nick7.png",
    "info": "1970 - rozprawa przeciw Jake Long oraz Joel Simpson, uczestniczenie w zorganizowanej grupie przestępczej handlującej skradzionymi i podrobionymi dziełami sztuki. Uniewinnieni z powodu braku dowodów. Relacje świadków świadczą jednak, że jest to prawda, ale nie udało się znaleźć wystarczających powodów."
  },{
    "id": 99,
    "firstName": "Bogey",
    "lastName": "Hugueville",
    "email": "bhugueville2q@nature.com",
    "gender": "Mężczyzna",
    "address": "Apt 1194",
    "city": "Shanhou",
    "birthdate": "2000-08-06",
    "phone": "216-954-2644",
    "ssn": "814-03-5088"
  }, {
    "id": 100,
    "firstName": "Natale",
    "lastName": "Kirkness",
    "email": "nkirkness2r@wikipedia.org",
    "gender": "Mężczyzna",
    "address": "PO Box 50668",
    "city": "Kotkot",
    "birthdate": "1963-02-23",
    "phone": "894-204-3517",
    "ssn": "842-12-5226"
  }, {
    "id": 1300,
    "firstName": "Michael",
    "lastName": "Johnson",
    "email": "brak",
    "gender": "Mężczyzna",
    "address": "Ośrodek Totustus Sala nr 5",
    "city": "Arkham",
    "birthdate": "1970-04-30",
    "phone": "698-790-434",
    "ssn": "815-03-9998",
    "photo": "nick8.png",
    "print": "p4",
    "info": "1999 - mandat za kradzież alkoholu z zamkniętego sklepu monopolowego"
  },];

  getData() {
    return this.data;
  }
}
