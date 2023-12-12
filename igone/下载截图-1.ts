import html2canvas from "html2canvas";

const downloadImage = async () => {
    const containerList = document.querySelectorAll('.your-container-class');

    const canvases = await Promise.all(
        Array.from(containerList).map(container =>
            html2canvas(container as HTMLElement, { useCORS: true })
        )
    );

    const maxWidth = Math.max(...canvases.map(canvas => canvas.width));
    const totalHeight = canvases.reduce((sum, canvas) => sum + canvas.height, 0);

    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = maxWidth;
    finalCanvas.height = totalHeight;

    const context = finalCanvas.getContext('2d');
    if (!context) return;

    let currentHeight = 0;
    canvases.forEach(canvas => {
        context.drawImage(canvas, 0, currentHeight);
        currentHeight += canvas.height;
    });

    // 将合并后的Canvas转换为数据URL，并触发下载
    const image = finalCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement('a');
    link.download = 'combined-image.png';
    link.href = image;
    link.click();
};

// 调用函数以下载图像
downloadImage();
