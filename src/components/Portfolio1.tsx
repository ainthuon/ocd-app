import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ<small></small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                    จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                    คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                    ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                    ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                    Government) นั่นเอง”{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-1-66.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
                <p>
                  การจัดการการเปลี่ยนแปลงที่มีประสิทธิผลและบทบาทในการประสบความสำเร็จของโครงการ
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    การจัดการการเปลี่ยนแปลงหมายถึงแนวทางที่มีโครงสร้างในการเตรียมการและสนับสนุน
                    ทีมงาน และองค์กรสำหรับการเปลี่ยนแปลงองค์กร
                    เป็นกระบวนการเปลี่ยนผ่านจากสถานะปัจจุบันไปสู่สถานะในอนาคตที่ต้องการโดยมีการหยุดชะงักในการดำเนินงานน้อยที่สุดการจัดการเปลี่ยนแปลงที่มีประสิทธิภาพช่วยให้มั่นใจว่าผู้คนยอมรับการเปลี่ยนแปลงอย่างเต็มใจและปรับตัวเข้ากับสภาพแวดล้อมใหม่ได้อย่างราบรื่น{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-67-71.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงเพื่อเปลี่ยนผ่าน</h3>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    ทคโนโลยีดิจิทัลได้พาผู้คนและโลกก้าวข้ามข้อจำกัดของพรมแดน
                    กาลเวลา และโลกกายภาพ พร้อมกับทำให้ปัญญาประดิษฐ์ (AI)
                    เข้ามามีบทบาทในการจัดการชีวิต เศรษฐกิจ
                    และสังคมยุคใหม่อย่างมีนัยสำคัญ!
                    โลกวันนี้จึงเคลื่อนไหวสร้างความเปลี่ยนแปลงในทุกมิติ
                    ทั้งการผลิต การบริการ การบริโภค การศึกษา
                    ไปจนถึงการพัฒนาโดยรวม ซึ่งความเคลื่อนไหวที่เกิดขึ้นทั้งหมด
                    มีแนวโน้มที่จะปรับตัวตาม “ภูมิทัศน์ดิจิทัล” ในเกือบทุกมิติ{" "}
                  </ol>
                </p>
                <p>
                  กระบวนการเปลี่ยนผ่านที่เกิดขึ้นนี้
                  ได้เบียดขับภาคส่วนที่ปรับตัวไม่ทันให้พ้นออกจากความเปลี่ยนแปลง
                  และการพัฒนาใหม่อย่างไม่หยุดยั้ง!
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-72-75.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                    2,000 ราย โดย McKinsey ในปี 2014
                    ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                    ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-76-78.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  คุณพร้อมไหม? …นักจิตวิทยาพร้อมจะช่วย
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                    การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                    และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                    และมีอารมณ์สดชื่นแจ่มใส
                    การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                    การเล่นบาส
                    ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                    ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-79-82.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  การสำรวจความพร้อมเป็นขั้นตอนในการสร้างความพร้อมในการเปลี่ยนแปลง
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    การสำรวจความพร้อมเป็นขั้นตอนสำคัญที่จะช่วยให้ทราบถึงระดับความพร้อมขององค์กร
                    ชุมชน หรือ บุคคลก่อนดำเนินการเปลี่ยนแปลง/
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-83-85.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={"https://www.humanica.com/th/resistance-to-change/"}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-86-89.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  {" "}
                  <Link
                    href={
                      "https://www.siamrajathanee.com/7-strategies-organizational-development/"
                    }
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    การเอาชนะการต่อต้านการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    องค์กรของคุณกำลังเผชิญหน้ากับความท้าทายอะไรอยู่?
                    การแข่งขันที่รุนแรง เทคโนโลยีที่เปลี่ยนแปลงตลอดเวลา
                    หรือปัญหาภายในองค์กรเอง? หากคำตอบคือใช่ การพัฒนาองค์กร
                    (Organizational Development)
                    อาจเป็นกุญแจสำคัญที่ไขปริศนาเหล่านี้ได้
                    บทความนี้จะพาคุณไปสำรวจวิธีการที่องค์กรใช้ในการพัฒนาตัวเองให้แข็งแกร่งขึ้น
                    พร้อมเจาะลึกถึงบทบาทสำคัญของ SO
                    ที่จะมาช่วยยกระดับองค์กรของคุณให้ก้าวไปข้างหน้า{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-90-92.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={"https://www.gotoknow.org/posts/495807"}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    <li>
                      การเปลี่ยนแปลงในอนาคตจะมีลักษณะและความรู้สึกอย่างไร?
                    </li>
                    <li>
                      เหตุใดการเปลี่ยนแปลงที่ต้องการจึงตดีกว่าสิ่งที่เป็นอยู่ตอนนนี้?
                    </li>
                    <li>
                      ตัวเร่งปฏิกิริยาใดที่ทำให้การเปลี่ยนแปลงมีความสำคัญหรือเร่งด่วนในขณะนี้เมื่อเปรียนเทียบกับลำดับความสำคัญอื่น
                    </li>
                    <li>
                      อะไรที่ทำให้การเปลี่ยนแปลงเหล่านี้สร้างแรงบันดาลใจและน่าจดจำในระดับบุคคล
                      ทีม และองค์กร?
                    </li>
                    <li>
                      การเปลี่ยนแปลงจะสอดคล้องกับกุลยุทธ์โดยรวมขององค์กรของเรา
                      จุดมุ่งหมายที่กว้างขึ้น และวัฒนธรรมองค์กรอย่างไร
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-93-98.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href={
                      "https://www.popticles.com/branding/how-to-write-effective-vision-statement/"
                    }
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    วิธีเขียน Vision Statement ให้มีประสิทธิภาพ
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "dice" }} className="ml-4">
                    <li>Vision Statement นั้นควรจะกระชับได้ใจความ</li>
                    <li>เรียบง่ายแต่ทรงพลัง</li>
                    <li>Vision Statement ไม่ใช่การขายของ</li>
                    <li>ซื่อสัตย์ จริงใจ ตรงไปตรงมา</li>
                    <li>สะท้อนในสิ่งที่ตัวเองเป็น</li>
                    <li>มีคุณค่าซ่อนอยู่ภายใน</li>
                    <li>แปลง Vision สู่ Tagline</li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-99-102.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href={"https://thailandpolicylab.com/stakeholder-analysis/"}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    ทำความรู้จักมนุษย์ให้ดีขึ้นด้วย
                    “การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย”
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    ปฏิเสธไม่ได้เลยว่าผู้มีส่วนได้ส่วนเสียเป็นหนึ่งในปัจจัยที่จะมาตัดสินความสำเร็จของโครงการใดๆ
                    ก็ตาม เนื่องจากโครงการจะ “สำเร็จ” ได้ก็ด้วยเครือข่ายสนับสนุน
                    ขณะเดียวกันโครงการนั้นก็สามารถ “ล้มเหลว”
                    ได้โดยผู้คนกลุ่มเดียวกันนี้เอง ในบทความนี้
                    เราจะมาแนะนำให้รู้จักกับ “การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย”
                    (stakeholder analysis)
                    ซึ่งเป็นเครื่องมือวางแผนเชิงยุทธศาสตร์ที่จะช่วยให้เราเข้าใจผู้มีส่วนได้ส่วนเสียได้ดีขึ้น
                    ได้รับความเชื่อใจจากพวกเขา
                    หรือแม้แต่พลิกสถานการณ์จากหน้ามือเป็นหลังมือ
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-103-106.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href={
                      "https://setsustainability.com/page/stakeholder-engagement"
                    }
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    การมีส่วนร่วมกับผู้มีส่วนได้เสีย และการวิเคราะห์ประเด็นสำคัญ
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    การบริหารจัดการธุรกิจที่มีประสิทธิภาพไม่ได้เกิดขึ้นด้วยตัวองค์กรเองเท่านั้น
                    แต่เกี่ยวข้องกับห่วงโซ่คุณค่าซึ่งประกอบด้วยผู้มีส่วนได้เสียหลากหลายกลุ่ม
                    ดังนั้น
                    องค์กรต้องพิจารณาให้ได้ว่ามีความเกี่ยวข้องกับผู้มีส่วนได้เสียกลุ่มใดบ้าง
                    แต่ละกลุ่มมีลักษณะเฉพาะอย่างไร
                    รวมถึงมีความสำคัญและสอดคล้องกับกลยุทธ์การดำเนินงานขององค์กรอย่างไร
                    ที่สำคัญองค์กรและผู้มีส่วนได้เสียมีคุณค่าร่วมกันอย่างไร{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-107-110.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://th.hrnote.asia/personnel-management/change-management-241120/"
                    }
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    บทบาทสำคัญของ คณะกรรมการบริหาร ช่วยนำองค์กรฝ่าวิกฤต
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    การบริหารธุรกิจในยุคที่ปัจจัยแวดล้อมมีความไม่แน่นอนสูง
                    รวมถึงความท้าทายใหม่ๆจากวิกฤตการระบาดใหญ่ของ COVID-19
                    ส่งผลกระทบต่อธุรกิจในหลายด้าน การที่องค์กรจะอยู่รอดได้นั้น
                    การปรับตัวอย่างรู้เท่าทันเป็นสิ่งสำคัญและจำเป็นอย่างยิ่ง
                    คณะกรรมการบริหาร หรือ Board of Directors
                    ซึ่งถือเป็นคณะบุคคลที่มีบทบาทสำคัญในการช่วยกำกับดูแลองค์กรให้สามารถปรับตัวและพร้อมรับมือกับความเปลี่ยนแปลง
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-111-114.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={"http://salforest.com/blog/review-theory-of-change"}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    การประคับประคองการเปลี่ยนแปลงคืออะไร
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    <li>
                      การดำเนินการเปลี่ยนแปลงทำให้เกิดค่าใช้จ่ายอย่างหลีกเลี่ยงไม่ได้
                      ผู้นำจึงต้องจัดการทรัพยากร
                    </li>
                    <li>การพัฒนาสมถรรนะและทักษะที่จำเป็น</li>{" "}
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-115-119.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
