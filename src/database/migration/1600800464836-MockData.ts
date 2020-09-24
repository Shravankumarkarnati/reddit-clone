import { MigrationInterface, QueryRunner } from "typeorm";

export class MockData1600800464836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    insert into post (title, post, "postOwnerId", points) values ('Diverse dedicated contingency', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 12, -10);
    insert into post (title, post, "postOwnerId", points) values ('Proactive intangible application', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 9, 33);
    insert into post (title, post, "postOwnerId", points) values ('Realigned intangible pricing structure', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 6, -16);
    insert into post (title, post, "postOwnerId", points) values ('Enterprise-wide 24/7 definition', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 9, 109);
    insert into post (title, post, "postOwnerId", points) values ('Assimilated high-level synergy', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 3, 32);
    insert into post (title, post, "postOwnerId", points) values ('Multi-layered zero administration customer loyalty', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 14, 95);
    insert into post (title, post, "postOwnerId", points) values ('Enhanced 3rd generation knowledge user', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 3, 143);
    insert into post (title, post, "postOwnerId", points) values ('Devolved asymmetric implementation', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, 39);
    insert into post (title, post, "postOwnerId", points) values ('Balanced 4th generation productivity', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 10, 113);
    insert into post (title, post, "postOwnerId", points) values ('Function-based exuding process improvement', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 9, -50);
    insert into post (title, post, "postOwnerId", points) values ('Enhanced stable synergy', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 5, 137);
    insert into post (title, post, "postOwnerId", points) values ('Optimized user-facing architecture', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 7, -22);
    insert into post (title, post, "postOwnerId", points) values ('Fundamental encompassing forecast', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 113);
    insert into post (title, post, "postOwnerId", points) values ('Customizable uniform strategy', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 14, 27);
    insert into post (title, post, "postOwnerId", points) values ('Compatible optimizing firmware', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 14, -15);
    insert into post (title, post, "postOwnerId", points) values ('Intuitive incremental migration', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 5, 26);
    insert into post (title, post, "postOwnerId", points) values ('Ergonomic empowering data-warehouse', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 10, -3);
    insert into post (title, post, "postOwnerId", points) values ('Seamless client-server orchestration', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 9, 14);
    insert into post (title, post, "postOwnerId", points) values ('Expanded contextually-based firmware', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 13, -14);
    insert into post (title, post, "postOwnerId", points) values ('Down-sized multimedia info-mediaries', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 10, 127);
    insert into post (title, post, "postOwnerId", points) values ('Seamless impactful implementation', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, -24);
    insert into post (title, post, "postOwnerId", points) values ('Synergized systematic data-warehouse', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 4, 79);
    insert into post (title, post, "postOwnerId", points) values ('Adaptive directional artificial intelligence', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 10, -36);
    insert into post (title, post, "postOwnerId", points) values ('Programmable static model', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 11, 119);
    insert into post (title, post, "postOwnerId", points) values ('Reverse-engineered 6th generation orchestration', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 3, 21);
    insert into post (title, post, "postOwnerId", points) values ('Integrated foreground matrices', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 7, -19);
    insert into post (title, post, "postOwnerId", points) values ('Operative human-resource instruction set', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 15, -2);
    insert into post (title, post, "postOwnerId", points) values ('Exclusive radical approach', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 12, 149);
    insert into post (title, post, "postOwnerId", points) values ('Fundamental uniform focus group', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, 144);
    insert into post (title, post, "postOwnerId", points) values ('Ameliorated full-range alliance', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 2, -2);
    insert into post (title, post, "postOwnerId", points) values ('Profound grid-enabled access', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, 104);
    insert into post (title, post, "postOwnerId", points) values ('Optional executive help-desk', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 14, 47);
    insert into post (title, post, "postOwnerId", points) values ('Cloned bandwidth-monitored conglomeration', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, 48);
    insert into post (title, post, "postOwnerId", points) values ('Automated disintermediate support', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3, 140);
    insert into post (title, post, "postOwnerId", points) values ('Down-sized full-range superstructure', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 7, 134);
    insert into post (title, post, "postOwnerId", points) values ('Polarised bifurcated software', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 4, -1);
    insert into post (title, post, "postOwnerId", points) values ('Advanced local array', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, 87);
    insert into post (title, post, "postOwnerId", points) values ('Robust transitional protocol', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 6, 93);
    insert into post (title, post, "postOwnerId", points) values ('Switchable contextually-based application', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 4, 38);
    insert into post (title, post, "postOwnerId", points) values ('Synergized 5th generation structure', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 6, -38);
    insert into post (title, post, "postOwnerId", points) values ('Monitored static concept', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 3, -26);
    insert into post (title, post, "postOwnerId", points) values ('Business-focused impactful internet solution', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 12, 116);
    insert into post (title, post, "postOwnerId", points) values ('Reactive object-oriented archive', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 6, 27);
    insert into post (title, post, "postOwnerId", points) values ('Profit-focused heuristic algorithm', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 13, -28);
    insert into post (title, post, "postOwnerId", points) values ('Business-focused mobile array', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 10, 15);
    insert into post (title, post, "postOwnerId", points) values ('Seamless clear-thinking circuit', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 3, 39);
    insert into post (title, post, "postOwnerId", points) values ('Business-focused bottom-line toolset', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 12, 128);
    insert into post (title, post, "postOwnerId", points) values ('Customizable methodical help-desk', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 12, 76);
    insert into post (title, post, "postOwnerId", points) values ('Business-focused local access', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 14, 84);
    insert into post (title, post, "postOwnerId", points) values ('Front-line heuristic Graphic Interface', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 15, -10);
    insert into post (title, post, "postOwnerId", points) values ('Total 4th generation challenge', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 3, 48);
    insert into post (title, post, "postOwnerId", points) values ('Diverse asynchronous flexibility', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 8, 74);
    insert into post (title, post, "postOwnerId", points) values ('Universal didactic monitoring', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 6, 11);
    insert into post (title, post, "postOwnerId", points) values ('Cross-platform solution-oriented instruction set', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 4, 133);
    insert into post (title, post, "postOwnerId", points) values ('Inverse grid-enabled strategy', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 5, -16);
    insert into post (title, post, "postOwnerId", points) values ('Integrated high-level moratorium', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, -31);
    insert into post (title, post, "postOwnerId", points) values ('Profit-focused heuristic complexity', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 2, 61);
    insert into post (title, post, "postOwnerId", points) values ('Fully-configurable neutral structure', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7, 73);
    insert into post (title, post, "postOwnerId", points) values ('Exclusive intangible collaboration', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 11, -7);
    insert into post (title, post, "postOwnerId", points) values ('Advanced 4th generation service-desk', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 6, -42);
    insert into post (title, post, "postOwnerId", points) values ('Streamlined bottom-line matrices', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, 90);
    insert into post (title, post, "postOwnerId", points) values ('Seamless actuating toolset', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 14, 30);
    insert into post (title, post, "postOwnerId", points) values ('Secured stable adapter', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 11, 144);
    insert into post (title, post, "postOwnerId", points) values ('Networked client-driven knowledge base', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 13, 64);
    insert into post (title, post, "postOwnerId", points) values ('Multi-layered non-volatile parallelism', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 4, -50);
    insert into post (title, post, "postOwnerId", points) values ('Adaptive attitude-oriented emulation', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 13, 50);
    insert into post (title, post, "postOwnerId", points) values ('Multi-channelled 5th generation analyzer', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 7, 54);
    insert into post (title, post, "postOwnerId", points) values ('Streamlined non-volatile capability', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 2, 1);
    insert into post (title, post, "postOwnerId", points) values ('Distributed holistic portal', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 14, 24);
    insert into post (title, post, "postOwnerId", points) values ('Visionary hybrid workforce', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 7, 4);
    insert into post (title, post, "postOwnerId", points) values ('Centralized secondary infrastructure', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 5, -18);
    insert into post (title, post, "postOwnerId", points) values ('Virtual empowering architecture', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 4, 116);
    insert into post (title, post, "postOwnerId", points) values ('Decentralized scalable migration', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 7, 126);
    insert into post (title, post, "postOwnerId", points) values ('Implemented heuristic capacity', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 6, 52);
    insert into post (title, post, "postOwnerId", points) values ('Monitored radical knowledge user', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 5, 127);
    insert into post (title, post, "postOwnerId", points) values ('Face to face attitude-oriented matrices', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 13, -8);
    insert into post (title, post, "postOwnerId", points) values ('Multi-channelled user-facing function', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 13, 100);
    insert into post (title, post, "postOwnerId", points) values ('Optimized coherent encryption', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 14, 116);
    insert into post (title, post, "postOwnerId", points) values ('Compatible fresh-thinking interface', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 4, -6);
    insert into post (title, post, "postOwnerId", points) values ('Centralized actuating system engine', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 15, 91);
    insert into post (title, post, "postOwnerId", points) values ('Total actuating encoding', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 14, 14);
    insert into post (title, post, "postOwnerId", points) values ('Re-engineered mobile portal', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 10, 147);
    insert into post (title, post, "postOwnerId", points) values ('Assimilated leading edge support', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 7, -4);
    insert into post (title, post, "postOwnerId", points) values ('Synergistic heuristic project', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8, 0);
    insert into post (title, post, "postOwnerId", points) values ('Universal background flexibility', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 9, 96);
    insert into post (title, post, "postOwnerId", points) values ('Team-oriented value-added focus group', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 13, 29);
    insert into post (title, post, "postOwnerId", points) values ('Profit-focused demand-driven matrices', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 7, -15);
    insert into post (title, post, "postOwnerId", points) values ('Versatile dedicated pricing structure', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, -14);
    insert into post (title, post, "postOwnerId", points) values ('Persevering radical capability', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 10, -18);
    insert into post (title, post, "postOwnerId", points) values ('Inverse system-worthy open architecture', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 5, 109);
    insert into post (title, post, "postOwnerId", points) values ('Universal static paradigm', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 2, 122);
    insert into post (title, post, "postOwnerId", points) values ('Advanced regional instruction set', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, -30);
    insert into post (title, post, "postOwnerId", points) values ('User-centric bottom-line portal', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 13, 46);
    insert into post (title, post, "postOwnerId", points) values ('Pre-emptive dynamic moderator', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 13, -50);
    insert into post (title, post, "postOwnerId", points) values ('Adaptive tangible matrices', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 14, 86);
    insert into post (title, post, "postOwnerId", points) values ('Digitized analyzing software', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 14, -21);
    insert into post (title, post, "postOwnerId", points) values ('Persistent zero administration solution', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 15, -9);
    insert into post (title, post, "postOwnerId", points) values ('Persistent system-worthy time-frame', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, -18);
    insert into post (title, post, "postOwnerId", points) values ('Upgradable object-oriented policy', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 9, 18);
    insert into post (title, post, "postOwnerId", points) values ('Implemented neutral hardware', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2, -19);
    
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
