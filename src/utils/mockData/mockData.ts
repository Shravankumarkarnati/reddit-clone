import { Connection } from "typeorm";
import argon2 from "argon2";
import { User } from "./../../database/entity/user";
import { Post } from "./../../database/entity/post";

const UserData = [
  {
    username: "bbattlestone0",
    password: "27NvgI6GmQe",
    email: "hswatheridge0@yandex.ru",
  },
  {
    username: "askyram1",
    password: "uDTeWrljEprd",
    email: "hwarlock1@tiny.cc",
  },
  {
    username: "ddwyer2",
    password: "LfatELkQ",
    email: "dtrudgeon2@springer.com",
  },
  {
    username: "cpreuvost3",
    password: "BDurnLo7g",
    email: "hdurran3@reuters.com",
  },
  {
    username: "bbradshaw4",
    password: "dixVQ95jmA",
    email: "ctussaine4@webs.com",
  },
  {
    username: "vwye5",
    password: "ntvAJNU",
    email: "rjiri5@dagondesign.com",
  },
  {
    username: "cburne6",
    password: "ZGoD3a1YL",
    email: "dtitta6@admin.ch",
  },
  {
    username: "bvye7",
    password: "uTh1tk42Z8d",
    email: "hmonelle7@soup.io",
  },
  {
    username: "vgorusso8",
    password: "YZ8cH7Y0w0KC",
    email: "fhuckell8@springer.com",
  },
  {
    username: "xcastillon9",
    password: "TL1zgvuC",
    email: "cfreshwater9@blogger.com",
  },
  {
    username: "qgowana",
    password: "xpMHFf",
    email: "vmacailinea@nbcnews.com",
  },
  {
    username: "chamleyb",
    password: "bswfJAh",
    email: "lfochsb@imageshack.us",
  },
  {
    username: "prenggerc",
    password: "ru5pOAh",
    email: "wgorghettoc@walmart.com",
  },
  {
    username: "cpostlethwaited",
    password: "y1agigkuj",
    email: "ahaind@facebook.com",
  },
  {
    username: "spatrye",
    password: "UihRVODE2Jva",
    email: "jgebhardte@twitpic.com",
  },
  {
    username: "locannonf",
    password: "3kaeqGyFX",
    email: "cthrowerf@apache.org",
  },
  {
    username: "rschachterg",
    password: "NXTQ6gXc8r",
    email: "jteresseg@webnode.com",
  },
];

export const genUserMockData = (connection: Connection) => {
  UserData.map(async (cur) => {
    const userRepo = connection.getRepository(User);
    const user = new User();
    user.username = cur.username;
    user.email = cur.email;
    user.password = await argon2.hash(cur.password);
    await userRepo.save(user);
  });
};

const PostData = [
  {
    title: "Fundamental",
    post:
      "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
    postOwnerId: 8,
    created_at: "1591124466000",
    vote: 638,
  },
  {
    title: "Horizontal",
    post:
      "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
    postOwnerId: 12,
    created_at: "1585532398000",
    vote: 1084,
  },
  {
    title: "challenge",
    post:
      "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    postOwnerId: 10,
    created_at: "1593145890000",
    vote: 831,
  },
  {
    title: "dedicated",
    post:
      "non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
    postOwnerId: 11,
    created_at: "1570309427000",
    vote: 556,
  },
  {
    title: "Multi-tiered",
    post:
      "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
    postOwnerId: 8,
    created_at: "1600529109000",
    vote: 965,
  },
  {
    title: "flexibility",
    post:
      "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    postOwnerId: 3,
    created_at: "1595360531000",
    vote: 228,
  },
  {
    title: "challenge",
    post:
      "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
    postOwnerId: 11,
    created_at: "1593042733000",
    vote: 369,
  },
  {
    title: "Phased",
    post:
      "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
    postOwnerId: 11,
    created_at: "1594768209000",
    vote: 686,
  },
  {
    title: "knowledge user",
    post:
      "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
    postOwnerId: 18,
    created_at: "1587787272000",
    vote: 421,
  },
  {
    title: "3rd generation",
    post:
      "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    postOwnerId: 17,
    created_at: "1601310076000",
    vote: 237,
  },
  {
    title: "definition",
    post:
      "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
    postOwnerId: 3,
    created_at: "1577656203000",
    vote: 78,
  },
  {
    title: "capacity",
    post:
      "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
    postOwnerId: 14,
    created_at: "1598070915000",
    vote: 689,
  },
  {
    title: "Cross-group",
    post:
      "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in",
    postOwnerId: 14,
    created_at: "1584565047000",
    vote: 613,
  },
  {
    title: "User-friendly",
    post:
      "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
    postOwnerId: 15,
    created_at: "1591744114000",
    vote: 591,
  },
  {
    title: "exuding",
    post:
      "consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
    postOwnerId: 16,
    created_at: "1600660575000",
    vote: 1050,
  },
  {
    title: "Persevering",
    post:
      "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy",
    postOwnerId: 14,
    created_at: "1598370136000",
    vote: 151,
  },
  {
    title: "zero tolerance",
    post:
      "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    postOwnerId: 7,
    created_at: "1578588890000",
    vote: 202,
  },
  {
    title: "fault-tolerant",
    post:
      "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    postOwnerId: 16,
    created_at: "1571878917000",
    vote: 297,
  },
  {
    title: "demand-driven",
    post:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
    postOwnerId: 16,
    created_at: "1575540304000",
    vote: 232,
  },
  {
    title: "full-range",
    post:
      "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam",
    postOwnerId: 5,
    created_at: "1588937001000",
    vote: 1064,
  },
  {
    title: "coherent",
    post:
      "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    postOwnerId: 12,
    created_at: "1580851648000",
    vote: 894,
  },
  {
    title: "maximized",
    post:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
    postOwnerId: 9,
    created_at: "1600315370000",
    vote: 10,
  },
  {
    title: "complexity",
    post:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi",
    postOwnerId: 16,
    created_at: "1599967385000",
    vote: 797,
  },
  {
    title: "Monitored",
    post:
      "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
    postOwnerId: 7,
    created_at: "1593048161000",
    vote: 537,
  },
  {
    title: "infrastructure",
    post:
      "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
    postOwnerId: 7,
    created_at: "1592706313000",
    vote: 493,
  },
  {
    title: "ability",
    post:
      "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
    postOwnerId: 2,
    created_at: "1585457145000",
    vote: 747,
  },
  {
    title: "upward-trending",
    post:
      "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
    postOwnerId: 15,
    created_at: "1600827235000",
    vote: 146,
  },
  {
    title: "heuristic",
    post:
      "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    postOwnerId: 13,
    created_at: "1588631470000",
    vote: 1020,
  },
  {
    title: "6th generation",
    post:
      "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque",
    postOwnerId: 8,
    created_at: "1578186248000",
    vote: 1059,
  },
  {
    title: "Integrated",
    post:
      "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
    postOwnerId: 15,
    created_at: "1601047609000",
    vote: 507,
  },
  {
    title: "product",
    post:
      "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam",
    postOwnerId: 12,
    created_at: "1578413871000",
    vote: 964,
  },
  {
    title: "human-resource",
    post:
      "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
    postOwnerId: 18,
    created_at: "1594945948000",
    vote: 749,
  },
  {
    title: "3rd generation",
    post:
      "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
    postOwnerId: 7,
    created_at: "1596734399000",
    vote: 522,
  },
  {
    title: "collaboration",
    post:
      "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
    postOwnerId: 1,
    created_at: "1586782604000",
    vote: 296,
  },
  {
    title: "Proactive",
    post:
      "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
    postOwnerId: 10,
    created_at: "1591818625000",
    vote: 453,
  },
  {
    title: "upward-trending",
    post:
      "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    postOwnerId: 3,
    created_at: "1580139540000",
    vote: 543,
  },
  {
    title: "dedicated",
    post:
      "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    postOwnerId: 10,
    created_at: "1578180152000",
    vote: 914,
  },
  {
    title: "global",
    post:
      "quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    postOwnerId: 12,
    created_at: "1595407273000",
    vote: 932,
  },
  {
    title: "throughput",
    post:
      "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis",
    postOwnerId: 11,
    created_at: "1601430181000",
    vote: 742,
  },
  {
    title: "multi-tasking",
    post:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
    postOwnerId: 4,
    created_at: "1580925295000",
    vote: 688,
  },
];

export const genPostsMockData = (connection: Connection) => {
  PostData.map(async (cur) => {
    const postRepo = connection.getRepository(Post);
    const post = new Post();
    post.title = cur.title;
    post.post = cur.post;
    post.postOwnerId = cur.postOwnerId;
    post.created_at = new Date(parseInt(cur.created_at)).toUTCString() as any;
    await postRepo.save(post);
  });
};
