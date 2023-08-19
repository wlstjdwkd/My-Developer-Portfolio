import { Button, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
const StyledContainer = styled(Container)({
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
});

const StyledTypography = styled(Typography)({
  marginBottom: "20px",
});
function Home() {
  return (
    <div>
      <StyledContainer>
        <StyledTypography variant="h2" gutterBottom>
          안녕하세요, 방진성입니다.
        </StyledTypography>
        <StyledTypography variant="h6">
          커뮤니케이션 전문 개발자로서 다양한 프로젝트 경험을 바탕으로 팀원들과
          원활하게 협업하며 목표를 효과적으로 달성하고자 합니다.
        </StyledTypography>
        <Button variant="contained" color="primary">
          포트폴리오 보기
        </Button>
      </StyledContainer>
    </div>
  );
}

export default Home;
