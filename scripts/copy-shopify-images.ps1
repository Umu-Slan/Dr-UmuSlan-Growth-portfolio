# Copy Shopify work sample images to short names (shopify-sample-1.png .. shopify-sample-15.png)
# Run: powershell -ExecutionPolicy Bypass -File scripts/copy-shopify-images.ps1
# Or with custom source: powershell -ExecutionPolicy Bypass -File scripts/copy-shopify-images.ps1 -SourceDir "C:\path\to\images"
param([string]$SourceDir)
$map = @(
  @{ n=1;  f="${base}_________1-58b1642c-ada1-44be-88ad-9dd3cdd805f2.png" },
  @{ n=2;  f="${base}________2-28caad43-62ed-4a34-933e-91aee9518014.png" },
  @{ n=3;  f="${base}_________3-e68c8f86-876d-4417-9a7a-dcd854518a57.png" },
  @{ n=4;  f="${base}________4-b795821b-340c-48bb-98a5-ca51e22f37fe.png" },
  @{ n=5;  f="${base}________5-9155bdee-0aed-415e-8420-850bad67e438.png" },
  @{ n=6;  f="${base}________6-e0caf40a-55ee-4a0b-941c-f48895c7c040.png" },
  @{ n=7;  f="${base}________7-b2b23ae4-6483-41ec-ac2c-3bb9e994abe7.png" },
  @{ n=8;  f="${base}________8-94842447-cea0-4ea5-8fb6-f0b10c7c71a2.png" },
  @{ n=9;  f="${base}________9-1fd554fa-4a31-4ec5-a2c8-f7ba1279a873.png" },
  @{ n=10; f="${base}________10-7a379691-d07d-41f4-983f-17e298104559.png" },
  @{ n=11; f="${base}________-0334ff95-496d-4c86-a993-79a15ce44265.png" },
  @{ n=12; f="${base}________12-8c997d9c-3820-4a77-95d0-0af0b394487a.png" },
  @{ n=13; f="${base}________13-9eba5ccb-14ea-46b5-baa9-fe14d3dfdc2b.png" },
  @{ n=14; f="${base}________14-43fea6d6-6f91-4e36-8913-70545ea92f97.png" },
  @{ n=15; f="${base}________15-ebd2f7ad-cf58-44e0-8966-66a820f41a88.png" }
)

# Try project root (framer1 or c-Users-nageh-cursor-projects-framer1)
$assetsDir = Join-Path $PSScriptRoot "..\assets"
if (-not (Test-Path $assetsDir)) {
  $alt = Join-Path $PSScriptRoot "..\..\c-Users-nageh-cursor-projects-framer1\assets"
  if (Test-Path $alt) { $assetsDir = $alt }
}
foreach ($m in $map) {
  $src = Join-Path $assetsDir $m.f
  $dst = Join-Path $assetsDir "shopify-sample-$($m.n).png"
  if (Test-Path $src) {
    Copy-Item $src $dst -Force
    Write-Host "OK: shopify-sample-$($m.n).png"
  } else {
    Write-Host "Missing: $($m.f)"
  }
}
