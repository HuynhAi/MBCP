import React from "react";

const Index: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  };

  const linkSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    flex: '1 1 100%',
    textAlign: 'center',
  };

  const linkBoxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    width: '80%',
    padding: '8px',
    marginRight: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '8px 16px',
  };

  const summarySectionStyle: React.CSSProperties = {
    ...sectionStyle,
    flex: '1 1 45%',
    textAlign: 'center',
  };

  const summaryBoxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const summaryItemStyle: React.CSSProperties = {
    flex: '1',
  };

  const statisticsSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    flex: '1 1 45%',
  };

  const statisticsListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
  };

  const statisticsItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
  };

  const statisticsTitleStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={linkSectionStyle}>
        <h2>Link tiếp thị liên kết của bạn</h2>
        <p>[Aff ID: 2310384301]</p>
        <div style={linkBoxStyle}>
          <input type="text" value="https://invest.hahalolc" readOnly style={inputStyle} />
          <button style={buttonStyle}>Sao chép</button>
        </div>
      </div>
      <div style={summarySectionStyle}>
        <h2>Tổng quan</h2>
        <div style={summaryBoxStyle}>
          <div style={summaryItemStyle}>
            <p>0</p>
            <span>Thành viên</span>
          </div>
          <div style={summaryItemStyle}>
            <p>0</p>
            <span>Nhà đầu tư</span>
          </div>
          <div style={summaryItemStyle}>
            <p>0</p>
            <span>Khoản đầu tư</span>
          </div>
          <div style={summaryItemStyle}>
            <p>0.00</p>
            <span>Tổng tiền (USD)</span>
          </div>
        </div>
      </div>
      <div style={statisticsSectionStyle}>
        <h2 style={statisticsTitleStyle}>Thống kê theo cấp</h2>
        <ul style={statisticsListStyle}>
          <li style={statisticsItemStyle}>1. Hội Đồng Giám Đốc Quốc Gia <span>0</span></li>
          <li style={statisticsItemStyle}>2. Giám Đốc Quốc Gia <span>0</span></li>
          <li style={statisticsItemStyle}>3. Giám Đốc <span>0</span></li>
          <li style={statisticsItemStyle}>4. Phó Giám Đốc <span>0</span></li>
          <li style={statisticsItemStyle}>5. Trưởng Phòng <span>0</span></li>
          <li style={statisticsItemStyle}>6. Phó Phòng <span>0</span></li>
          <li style={statisticsItemStyle}>7. Nhân Viên <span>0</span></li>
          <li style={statisticsItemStyle}>8. Cộng tác viên <span>0</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
