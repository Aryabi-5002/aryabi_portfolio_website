import qrcode

# Put your portfolio website URL here
portfolio_url = "https://aryabi-portfolio-website.vercel.app/"

# Create QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4
)

# Add URL data
qr.add_data(portfolio_url)

# Generate QR
qr.make(fit=True)

# Create image
qr_image = qr.make_image(
    fill_color="black",
    back_color="white"
)

# Save QR code
qr_image.save("portfolio-qrcode.png")

print("QR Code generated successfully!")