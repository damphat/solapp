## SOLAPP  (tạm nghỉ)

Viết một bộ tool thay thế `truffle`.

## Truffle bị 3 vấn đề

- Chậm chạp khi smartcontract quá lớn (nhiều file .sol).
- Không hỗ trợ sẵn typescript khi viết unit-test
- Làm hỏng mocha vì thêm hàm `contract` vào mocha

## Để cải thiện tốc độ

- [ ] Biên dịch nhanh bằng native compiler `solc.exe`
- [ ] Cho phép skip/ignore các smart contract, mà không cần xóa

## Generator, mặc định support typescript, không cần config

- [ ] Có command để generate project, contract, unit-test
- [ ] Tự động generate các typescript definition
- [ ] Ưu tiên dùng `ethers` thay cho `web3`
- [ ] Generate test với typescript

## Giữ nguyên mocha
- [ ] giúp vscode extention có thể hiểu unitest
 